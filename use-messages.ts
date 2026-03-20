import { useMutation } from "@tanstack/react-query";
import { api } from "@shared/routes";
import type { InsertMessage } from "@shared/schema";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

function parseWithLogging<T>(schema: z.ZodSchema<T>, data: unknown, label: string): T {
  const result = schema.safeParse(data);
  if (!result.success) {
    console.error(`[Zod] ${label} validation failed:`, result.error.format());
    throw result.error;
  }
  return result.data;
}

export function useCreateMessage() {
  const { toast } = useToast();
  
  return useMutation({
    mutationFn: async (data: InsertMessage) => {
      const validated = api.messages.create.input.parse(data);
      const res = await fetch(api.messages.create.path, {
        method: api.messages.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validated),
        credentials: "include",
      });
      
      const resData = await res.json();
      
      if (!res.ok) {
        if (res.status === 400) {
          const error = parseWithLogging(api.messages.create.responses[400], resData, "messages.create.error");
          throw new Error(error.message);
        }
        throw new Error("Failed to send message");
      }
      
      return parseWithLogging(api.messages.create.responses[201], resData, "messages.create.success");
    },
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible.",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message || "Failed to send message. Please try again.",
        variant: "destructive",
      });
    }
  });
}
