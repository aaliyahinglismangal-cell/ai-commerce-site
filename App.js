import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Search, ShoppingCart, Package } from "lucide-react";
import { motion } from "framer-motion";

export default function AICommerceMockup() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <header className="flex justify-between items-center mb-10">
        <div className="flex items-center space-x-2">
          <Package className="w-6 h-6 text-blue-600" />
          <h1 className="text-2xl font-bold text-gray-800">Algeco Direct</h1>
        </div>
        <div className="flex items-center space-x-4">
          <Input placeholder="Search units, cabins, containers..." className="w-80" />
          <Button variant="outline"><Search className="w-4 h-4 mr-1" />Search</Button>
          <Button variant="default"><ShoppingCart className="w-4 h-4 mr-2" />Cart (2)</Button>
        </div>
      </header>

      <section className="grid grid-cols-3 gap-6">
        {/* Product Card Example */}
        {[1, 2, 3].map((item) => (
          <motion.div key={item} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: item * 0.1 }}>
            <Card className="shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-gray-800">Modular Office Unit</CardTitle>
              </CardHeader>
              <CardContent>
                <img src="https://images.unsplash.com/photo-1616627453695-66e43e3f96f3" alt="modular office" className="rounded-lg mb-3" />
                <p className="text-sm text-gray-600 mb-3">Ideal for site offices or temporary workspace. Sizes from 3x3m to 6x12m.</p>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-lg font-semibold text-gray-900">£120 / week</span>
                  <Select>
                    <SelectTrigger className="w-[120px]">
                      <SelectValue placeholder="Size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="small">3x3m</SelectItem>
                      <SelectItem value="medium">6x6m</SelectItem>
                      <SelectItem value="large">6x12m</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button className="w-full">Add to Basket</Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </section>

      <section className="mt-12 bg-white p-6 rounded-xl shadow-sm">
        <h2 className="text-xl font-semibold mb-4">AI-Powered Product Recommender</h2>
        <p className="text-gray-600 mb-3">Based on your project type and order history, we recommend:</p>
        <div className="flex space-x-4">
          <Card className="flex-1 p-4">
            <CardTitle className="text-gray-800">Stackable Storage Units</CardTitle>
            <p className="text-sm text-gray-600">Recommended for multi-site operations.</p>
            <Button className="mt-3">View Details</Button>
          </Card>
          <Card className="flex-1 p-4">
            <CardTitle className="text-gray-800">Eco Welfare Cabins</CardTitle>
            <p className="text-sm text-gray-600">Ideal for sustainable construction sites.</p>
            <Button className="mt-3">View Details</Button>
          </Card>
        </div>
      </section>
    </div>
  );
}
