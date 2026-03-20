import { useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { queryClient, apiRequest } from "@/lib/queryClient";
import { useAuth } from "@/hooks/use-auth";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, Package, Tag, Plus, Trash2, ArrowLeft, ShieldX } from "lucide-react";
import type { Product, Offer } from "@shared/schema";
import logoImg from "@assets/Without_BG_1772531259275.png";

function StockManagement() {
  const { toast } = useToast();

  const { data: products, isLoading } = useQuery<Product[]>({
    queryKey: ["/api/products"],
  });

  const updateStock = useMutation({
    mutationFn: async ({ id, stock }: { id: number; stock: string }) => {
      await apiRequest("PATCH", `/api/admin/products/${id}/stock`, { stock });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/products"] });
      toast({ title: "Stock updated successfully" });
    },
    onError: () => {
      toast({ title: "Failed to update stock", variant: "destructive" });
    },
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="w-6 h-6 animate-spin text-primary" />
      </div>
    );
  }

  const stockOptions = ["In Stock", "Limited", "Out of Stock"];

  return (
    <div className="space-y-4">
      <p className="text-sm text-muted-foreground mb-6">
        Update the stock availability for each pickle product below.
      </p>
      {products?.map((product) => (
        <div
          key={product.id}
          data-testid={`admin-product-${product.id}`}
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-card border border-border rounded-lg"
        >
          <div className="flex-1 min-w-0">
            <h4 className="font-medium text-foreground truncate">{product.name}</h4>
            <p className="text-sm text-muted-foreground">{product.category} &middot; ₹{product.price}/kg</p>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <select
              value={product.stock || "In Stock"}
              onChange={(e) => updateStock.mutate({ id: product.id, stock: e.target.value })}
              data-testid={`select-stock-${product.id}`}
              className="h-10 px-3 rounded-md border border-input bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            >
              {stockOptions.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
            <span
              className={`px-3 py-1 text-xs font-semibold rounded-full whitespace-nowrap ${
                product.stock === "Out of Stock"
                  ? "bg-red-100 text-red-700"
                  : product.stock === "Limited"
                  ? "bg-amber-100 text-amber-700"
                  : "bg-green-100 text-green-700"
              }`}
            >
              {product.stock || "In Stock"}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

function OffersManagement() {
  const { toast } = useToast();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { data: offers, isLoading } = useQuery<Offer[]>({
    queryKey: ["/api/admin/offers"],
    queryFn: async () => {
      const res = await fetch("/api/admin/offers", { credentials: "include" });
      if (!res.ok) throw new Error("Failed to fetch offers");
      return res.json();
    },
  });

  const createOffer = useMutation({
    mutationFn: async (data: { title: string; description: string }) => {
      await apiRequest("POST", "/api/admin/offers", { ...data, isActive: true });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/offers"] });
      setTitle("");
      setDescription("");
      toast({ title: "Offer created successfully" });
    },
    onError: () => {
      toast({ title: "Failed to create offer", variant: "destructive" });
    },
  });

  const toggleOffer = useMutation({
    mutationFn: async ({ id, isActive }: { id: number; isActive: boolean }) => {
      await apiRequest("PATCH", `/api/admin/offers/${id}`, { isActive });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/offers"] });
      toast({ title: "Offer updated" });
    },
  });

  const deleteOffer = useMutation({
    mutationFn: async (id: number) => {
      await apiRequest("DELETE", `/api/admin/offers/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/offers"] });
      toast({ title: "Offer deleted" });
    },
  });

  return (
    <div className="space-y-8">
      <div className="bg-card border border-border rounded-lg p-6">
        <h3 className="font-serif text-lg font-medium text-foreground mb-4">Create New Offer</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Offer Title</label>
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. 10% off on all sweet pickles!"
              data-testid="input-offer-title"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Description</label>
            <Textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Details about the offer..."
              data-testid="input-offer-description"
              className="resize-none min-h-[80px]"
            />
          </div>
          <Button
            onClick={() => {
              if (title.trim() && description.trim()) {
                createOffer.mutate({ title: title.trim(), description: description.trim() });
              }
            }}
            disabled={createOffer.isPending || !title.trim() || !description.trim()}
            data-testid="button-create-offer"
          >
            <Plus className="h-4 w-4 mr-2" />
            {createOffer.isPending ? "Creating..." : "Create Offer"}
          </Button>
        </div>
      </div>

      <div>
        <h3 className="font-serif text-lg font-medium text-foreground mb-4">Existing Offers</h3>
        {isLoading ? (
          <div className="flex items-center justify-center py-10">
            <Loader2 className="w-6 h-6 animate-spin text-primary" />
          </div>
        ) : offers?.length === 0 ? (
          <p className="text-sm text-muted-foreground py-8 text-center">No offers created yet.</p>
        ) : (
          <div className="space-y-3">
            {offers?.map((offer) => (
              <div
                key={offer.id}
                data-testid={`admin-offer-${offer.id}`}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-card border border-border rounded-lg"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-medium text-foreground truncate">{offer.title}</h4>
                    <span
                      className={`px-2 py-0.5 text-xs font-semibold rounded-full ${
                        offer.isActive ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"
                      }`}
                    >
                      {offer.isActive ? "Active" : "Inactive"}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">{offer.description}</p>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => toggleOffer.mutate({ id: offer.id, isActive: !offer.isActive })}
                    data-testid={`button-toggle-offer-${offer.id}`}
                  >
                    {offer.isActive ? "Deactivate" : "Activate"}
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => deleteOffer.mutate(offer.id)}
                    data-testid={`button-delete-offer-${offer.id}`}
                    className="text-red-600 hover:text-red-700"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function Admin() {
  const { user, isAuthenticated, isLoading: authLoading } = useAuth();
  const [activeTab, setActiveTab] = useState<"stock" | "offers">("stock");

  const { data: adminCheck, isLoading: adminLoading } = useQuery<{ isAdmin: boolean }>({
    queryKey: ["/api/auth/is-admin"],
    enabled: isAuthenticated,
  });

  if (authLoading || (isAuthenticated && adminLoading)) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <Loader2 className="w-8 h-8 animate-spin text-amber-600" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white px-6">
        <div className="text-center max-w-sm">
          <div className="h-24 w-24 rounded-full mx-auto mb-6 shadow-lg border-4 border-amber-100 overflow-hidden" data-testid="img-admin-logo">
            <img src={logoImg} alt="Mumma's Kitchen" className="w-full h-[115%] object-cover object-top" />
          </div>
          <h1 className="font-serif text-3xl text-gray-900 mb-2">Admin Login</h1>
          <p className="text-gray-500 mb-8 text-sm leading-relaxed">Sign in with your Google account to access the Mumma's Kitchen admin dashboard.</p>
          <Button className="bg-amber-600 hover:bg-amber-700 text-white px-8 h-12 text-base w-full" asChild data-testid="button-admin-login">
            <a href="/api/login">Sign in with Google</a>
          </Button>
          <a href="/" className="inline-block mt-6 text-sm text-gray-400 hover:text-gray-600 transition-colors" data-testid="link-back-home">&larr; Back to Home</a>
        </div>
      </div>
    );
  }

  if (!adminCheck?.isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white px-6">
        <div className="text-center max-w-sm">
          <ShieldX className="h-16 w-16 text-red-400 mx-auto mb-4" />
          <h1 className="font-serif text-2xl text-gray-900 mb-2">Access Denied</h1>
          <p className="text-gray-500 mb-6 text-sm leading-relaxed">This account does not have admin privileges. Please sign in with the authorized admin account.</p>
          <div className="flex flex-col gap-3">
            <Button className="bg-amber-600 hover:bg-amber-700 text-white h-11" asChild data-testid="button-try-another">
              <a href="/api/logout">Try Another Account</a>
            </Button>
            <a href="/" className="text-sm text-gray-400 hover:text-gray-600 transition-colors" data-testid="link-denied-home">&larr; Back to Home</a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <a href="/" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-admin-back">
                <ArrowLeft className="h-5 w-5" />
              </a>
              <h1 className="font-serif text-3xl text-foreground">Admin Dashboard</h1>
            </div>
            <p className="text-sm text-muted-foreground ml-8">
              Welcome, {user?.firstName || user?.email || "Admin"}
            </p>
          </div>
          <Button variant="outline" size="sm" asChild data-testid="button-admin-logout">
            <a href="/api/logout">Logout</a>
          </Button>
        </div>

        <div className="flex gap-2 mb-8 border-b border-border">
          <button
            onClick={() => setActiveTab("stock")}
            data-testid="tab-stock"
            className={`flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
              activeTab === "stock"
                ? "border-primary text-primary"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            <Package className="h-4 w-4" />
            Stock Management
          </button>
          <button
            onClick={() => setActiveTab("offers")}
            data-testid="tab-offers"
            className={`flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
              activeTab === "offers"
                ? "border-primary text-primary"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            <Tag className="h-4 w-4" />
            Offers
          </button>
        </div>

        {activeTab === "stock" ? <StockManagement /> : <OffersManagement />}
      </div>
    </div>
  );
}
