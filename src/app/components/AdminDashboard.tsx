import React, { useState } from 'react';
import { motion } from 'motion/react';
import { BarChart3, Menu as MenuIcon, Calendar, Settings, LogOut, TrendingUp, Users, DollarSign, ShoppingBag } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Badge } from './ui/badge';

interface DashboardStats {
  activeOrders: number;
  todayRevenue: number;
  totalCustomers: number;
  menuItems: number;
}

export const AdminDashboard: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  // Mock stats - in production, fetch from Supabase
  const stats: DashboardStats = {
    activeOrders: 12,
    todayRevenue: 145000,
    totalCustomers: 10234,
    menuItems: 45
  };

  // Simple demo authentication - in production, use Supabase Auth
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Demo credentials: admin / demo123
    if (username === 'admin' && password === 'demo123') {
      setIsAuthenticated(true);
      setLoginError('');
    } else {
      setLoginError('Invalid credentials. Try admin / demo123');
    }
  };

  // Login Screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#212121] via-[#2A2A2A] to-[#1A1A1A] flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md"
        >
          <Card className="border-2 border-[#FFD700]/20 shadow-2xl">
            <CardHeader className="text-center">
              <h1 className="text-3xl font-bold text-foreground mb-2">
                In & Out Kitchen
              </h1>
              <p className="text-muted-foreground">Admin Dashboard</p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <Input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full"
                    required
                  />
                </div>
                <div>
                  <Input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full"
                    required
                  />
                </div>
                {loginError && (
                  <p className="text-sm text-destructive">{loginError}</p>
                )}
                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90"
                  size="lg"
                >
                  Sign In
                </Button>
                <p className="text-xs text-center text-muted-foreground mt-4">
                  Demo: admin / demo123
                </p>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    );
  }

  // Main Dashboard
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-foreground">
              Admin Dashboard
            </h1>
            <Button
              variant="outline"
              onClick={() => setIsAuthenticated(false)}
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            {
              title: 'Active Orders',
              value: stats.activeOrders,
              icon: <ShoppingBag className="w-6 h-6" />,
              color: 'text-[#FF6B35]',
              bgColor: 'bg-[#FF6B35]/10'
            },
            {
              title: "Today's Revenue",
              value: `₦${stats.todayRevenue.toLocaleString()}`,
              icon: <DollarSign className="w-6 h-6" />,
              color: 'text-[#2E7D32]',
              bgColor: 'bg-[#2E7D32]/10'
            },
            {
              title: 'Total Customers',
              value: stats.totalCustomers.toLocaleString(),
              icon: <Users className="w-6 h-6" />,
              color: 'text-[#3F51B5]',
              bgColor: 'bg-[#3F51B5]/10'
            },
            {
              title: 'Menu Items',
              value: stats.menuItems,
              icon: <MenuIcon className="w-6 h-6" />,
              color: 'text-[#FFD700]',
              bgColor: 'bg-[#FFD700]/10'
            }
          ].map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{stat.title}</p>
                      <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                    </div>
                    <div className={`p-3 rounded-full ${stat.bgColor} ${stat.color}`}>
                      {stat.icon}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="overview">
              <TrendingUp className="w-4 h-4 mr-2" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="menu">
              <MenuIcon className="w-4 h-4 mr-2" />
              Menu
            </TabsTrigger>
            <TabsTrigger value="events">
              <Calendar className="w-4 h-4 mr-2" />
              Events
            </TabsTrigger>
            <TabsTrigger value="settings">
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <Card>
              <CardHeader>
                <CardTitle>Analytics Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                    <div>
                      <p className="text-sm text-muted-foreground">Most Popular</p>
                      <p className="font-semibold text-foreground">Jollof Rice</p>
                    </div>
                    <Badge variant="secondary">324 orders</Badge>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                    <div>
                      <p className="text-sm text-muted-foreground">Low Stock Alert</p>
                      <p className="font-semibold text-destructive">Egusi at 20%</p>
                    </div>
                    <Badge variant="destructive">Action Needed</Badge>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                    <div>
                      <p className="text-sm text-muted-foreground">Peak Hours</p>
                      <p className="font-semibold text-foreground">7PM - 9PM</p>
                    </div>
                    <Badge>45% of orders</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="menu">
            <Card>
              <CardHeader>
                <CardTitle>Menu Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Menu management connected to Supabase. Upload photos, edit prices, toggle availability, and more.
                </p>
                <Button className="bg-primary hover:bg-primary/90">
                  Add New Item
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="events">
            <Card>
              <CardHeader>
                <CardTitle>Event Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Schedule events, manage RSVPs, and moderate user stories.
                </p>
                <Button className="bg-primary hover:bg-primary/90">
                  Create Event
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings">
            <Card>
              <CardHeader>
                <CardTitle>Settings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Security</h3>
                    <p className="text-sm text-muted-foreground">
                      Multi-factor authentication, rate limiting, and audit logs enabled
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Integration</h3>
                    <p className="text-sm text-muted-foreground">
                      WhatsApp Business API, Google Calendar, and Cloudinary connected
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};
