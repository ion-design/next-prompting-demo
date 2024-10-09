```tsx
/* a sleek and modern settings page component for a SaaS management dashboard, encapsulated in a floating card with subtle shadow and rounded corners. The component should feature a tabbed interface with smooth transitions between sections. Include the following tabs and settings:
 
General:
Company name and logo upload with drag-and-drop functionality
Time zone selector
Language preference dropdown
 
 
Users & Permissions:
User list with avatars, roles, and last active status
Inline role editing with a popover interface
Bulk actions menu for managing multiple users
Invite new user form with email validation
 
 
API & Integrations:
API key management with a toggle to show/hide keys
OAuth token generator with a copy-to-clipboard button
Webhook URL configuration with test ping functionality
Third-party integration toggles with connection status indicators
 
 
Billing & Subscription:
Current plan display with usage metrics and progress bars
Interactive pricing table for plan comparison and upgrades
Payment method management with card brand icons
Billing history accordion with expandable invoice details
 */
import React, { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useDropzone } from 'react-dropzone';
import { 
  Globe, 
  Users, 
  Key, 
  CreditCard, 
  Upload, 
  Plus, 
  Copy, 
  Trash,
  PencilSimple,
  ArrowClockwise,
  DotsThreeVertical,
  CaretDown,
  CaretUp
} from '@phosphor-icons/react/dist/ssr';
import Avatar from '@/components/ion/Avatar';
import Button from '@/components/ion/Button';
import Input from '@/components/ion/Input';
import Select from '@/components/ion/Select';
import { Tab, Tabs, TabsContent, TabsList } from '@/components/ion/Tabs';
import Switch from '@/components/ion/Switch';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ion/Popover';
import Slider from '@/components/ion/Slider';
import Badge from '@/components/ion/Badge';
import LineItem from '@/components/ion/LineItem';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const listVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
};

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState('general');
  const [companyName, setCompanyName] = useState('');
  const [companyLogo, setCompanyLogo] = useState<File | null>(null);
  const [timeZone, setTimeZone] = useState('');
  const [language, setLanguage] = useState('');
  const [users, setUsers] = useState<Array<{ id: number; name: string; role: string; lastActive: string }>>([]);
  const [apiKeys, setApiKeys] = useState<Array<{ id: number; name: string; key: string }>>([]);
  const [showApiKeys, setShowApiKeys] = useState(false);
  const [webhookUrl, setWebhookUrl] = useState('');
  const [currentPlan, setCurrentPlan] = useState('');
  const [expandedInvoice, setExpandedInvoice] = useState<number | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setCompanyLogo(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  useEffect(() => {
    setTimeout(() => {
      setCompanyName('Acme Inc.');
      setTimeZone('UTC');
      setLanguage('en');
      setUsers([
        { id: 1, name: 'John Doe', role: 'Admin', lastActive: '2 hours ago' },
        { id: 2, name: 'Jane Smith', role: 'Editor', lastActive: '1 day ago' },
      ]);
      setApiKeys([
        { id: 1, name: 'Production API Key', key: 'prod_1234567890' },
        { id: 2, name: 'Development API Key', key: 'dev_0987654321' },
      ]);
      setWebhookUrl('https://api.example.com/webhook');
      setCurrentPlan('Pro');
    }, 1000);
  }, []);

  return (
    <motion.div
      className="bg-background w-full max-w-4xl mx-auto p-8 rounded-radius-lg shadow-medium"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <h1 className="text-3xl font-semibold text-foreground mb-6">Settings</h1>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <Tab value="general"><Globe size={16} weight="bold" />General</Tab>
          <Tab value="users"><Users size={16} weight="bold" />Users & Permissions</Tab>
          <Tab value="api"><Key size={16} weight="bold" />API & Integrations</Tab>
          <Tab value="billing"><CreditCard size={16} weight="bold" />Billing & Subscription</Tab>
        </TabsList>

        <AnimatePresence exitBeforeEnter>
          {activeTab === 'general' && (
            <TabsContent value="general" key="general">
              <motion.div
                className="space-y-6"
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                exit="hidden"
                transition={{ duration: 0.5 }}
              >
                <Input
                  label="Company Name"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                />

                <motion.div
                  className="relative"
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <label className="block text-sm font-medium text-secondary mb-2">Company Logo</label>
                  <motion.div
                    {...getRootProps()}
                    className={`border-2 border-dashed border-stroke p-8 rounded-radius-sm text-center cursor-pointer transition-colors ${
                      isDragActive ? 'border-primary bg-primary-accent' : 'hover:border-primary-hover'
                    }`}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    transition={{ duration: 0.3 }}
                  >
                    <input {...getInputProps()} />
                    <Upload size={48} className="mx-auto mb-4 text-secondary" />
                    <p className="text-secondary">
                      {companyLogo ? companyLogo.name : 'Drag & drop your logo here, or click to select a file'}
                    </p>
                  </motion.div>
                </motion.div>

                <motion.div
                  className="space-y-4"
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  <Select
                    label="Time Zone"
                    options={[
                      { value: 'UTC', label: 'UTC' },
                      { value: 'EST', label: 'Eastern Time (EST)' },
                      { value: 'PST', label: 'Pacific Time (PST)' },
                    ]}
                    value={timeZone}
                    onValueChange={setTimeZone}
                  />

                  <Select
                    label="Language"
                    options={[
                      { value: 'en', label: 'English', iconLeading: <span className="fi fi-gb"></span> },
                      { value: 'es', label: 'Español', iconLeading: <span className="fi fi-es"></span> },
                      { value: 'fr', label: 'Français', iconLeading: <span className="fi fi-fr"></span> },
                    ]}
                    value={language}
                    onValueChange={setLanguage}
                  />
                </motion.div>
              </motion.div>
            </TabsContent>
          )}

          {activeTab === 'users' && (
            <TabsContent value="users" key="users">
              <motion.div
                className="space-y-6"
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                exit="hidden"
                transition={{ duration: 0.6 }}
              >
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold text-foreground">User List</h2>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Button
                      variant="outline"
                      color="primary"
                      size="sm"
                      iconLeading={<Plus size={16} weight="bold" />}
                    >
                      Invite User
                    </Button>
                  </motion.div>
                </div>

                <motion.div
                  className="space-y-4"
                  variants={listVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                >
                  {users.map((user) => (
                    <motion.div
                      key={user.id}
                      className="flex items-center justify-between p-4 bg-container rounded-radius-sm"
                      variants={itemVariants}
                      whileHover={{ scale: 1.005 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex items-center space-x-4">
                        <Avatar
                          size="md"
                          src={`https://i.pravatar.cc/150?u=${user.id}`}
                          alt={user.name}
                          topStatus="online"
                        />
                        <div>
                          <p className="font-semibold text-foreground">{user.name}</p>
                          <p className="text-sm text-secondary">{user.role}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <span className="text-sm text-subtle">Last active: {user.lastActive}</span>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button variant="ghost" color="neutral" size="sm">
                              <DotsThreeVertical size={16} weight="bold" />
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-48">
                            <motion.div
                              initial={{ opacity: 0, scale: 0.95 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.95 }}
                              transition={{ duration: 0.2 }}
                              className="space-y-2"
                            >
                              <Button
                                variant="ghost"
                                color="neutral"
                                size="sm"
                                className="w-full justify-start"
                                iconLeading={<PencilSimple size={16} weight="bold" />}
                              >
                                Edit Role
                              </Button>
                              <Button
                                variant="ghost"
                                color="danger"
                                size="sm"
                                className="w-full justify-start"
                                iconLeading={<Trash size={16} weight="bold" />}
                              >
                                Remove User
                              </Button>
                            </motion.div>
                          </PopoverContent>
                        </Popover>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </TabsContent>
          )}

          {activeTab === 'api' && (
            <TabsContent value="api" key="api">
              <motion.div
                className="space-y-6"
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                exit="hidden"
                transition={{ duration: 0.6 }}
              >
                <motion.div
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.1, duration: 0.5 }}
                >
                  <h2 className="text-xl font-semibold text-foreground mb-4">API Keys</h2>
                  <Switch
                    label="Show API Keys"
                    checked={showApiKeys}
                    onCheckedChange={setShowApiKeys}
                  />
                  <motion.div
                    className="mt-4 space-y-4"
                    variants={listVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                  >
                    {apiKeys.map((apiKey) => (
                      <motion.div
                        key={apiKey.id}
                        className="flex items-center justify-between p-4 bg-container rounded-radius-sm"
                        variants={itemVariants}
                        whileHover={{ scale: 1.005 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div>
                          <p className="font-semibold text-foreground">{apiKey.name}</p>
                          <p className="text-sm text-secondary">
                            {showApiKeys ? apiKey.key : '••••••••••••••••'}
                          </p>
                        </div>
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Button
                            variant="ghost"
                            color="neutral"
                            size="sm"
                            iconLeading={<Copy size={16} weight="bold" />}
                            onClick={() => navigator.clipboard.writeText(apiKey.key)}
                          >
                            Copy
                          </Button>
                        </motion.div>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <h2 className="text-xl font-semibold text-foreground mb-4">Webhook Configuration</h2>
                  <Input
                    label="Webhook URL"
                    value={webhookUrl}
                    onChange={(e) => setWebhookUrl(e.target.value)}
                  />
                  <motion.div
                    className="mt-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Button
                      variant="outline"
                      color="primary"
                      size="sm"
                      iconLeading={<ArrowClockwise size={16} weight="bold" />}
                    >
                      Test Webhook
                    </Button>
                  </motion.div>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <h2 className="text-xl font-semibold text-foreground mb-4">Third-party Integrations</h2>
                  <div className="space-y-4">
                    {['Slack', 'Google Analytics', 'Zapier'].map((integration) => (
                      <motion.div
                        key={integration}
                        className="flex items-center justify-between p-4 bg-container rounded-radius-sm"
                        whileHover={{ scale: 1.005 }}
                        transition={{ duration: 0.3 }}
                      >
                        <span className="font-semibold text-foreground">{integration}</span>
                        <Switch />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </TabsContent>
          )}

          {activeTab === 'billing' && (
            <TabsContent value="billing" key="billing">
              <motion.div
                className="space-y-6"
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                exit="hidden"
                transition={{ duration: 0.6 }}
              >
                <motion.div
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.1, duration: 0.5 }}
                >
                  <h2 className="text-xl font-semibold text-foreground mb-4">Current Plan</h2>
                  <div className="p-4 bg-container rounded-radius-sm">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-lg font-semibold text-foreground">{currentPlan}</span>
                      <Badge color="blue" variant="soft">Active</Badge>
                    </div>
                    <div className="space-y-2">
                      <div>
                        <label className="text-sm text-secondary">API Calls</label>
                        <div className="flex items-center justify-between">
                          <span className="text-foreground">75,000 / 100,000</span>
                          <span className="text-sm text-subtle">75%</span>
                        </div>
                        <Slider value={[75]} max={100} />
                      </div>
                      <div>
                        <label className="text-sm text-secondary">Storage</label>
                        <div className="flex items-center justify-between">
                          <span className="text-foreground">15 GB / 20 GB</span>
                          <span className="text-sm text-subtle">75%</span>
                        </div>
                        <Slider value={[75]} max={100} />
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <h2 className="text-xl font-semibold text-foreground mb-4">Payment Method</h2>
                  <div className="p-4 bg-container rounded-radius-sm">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-8 bg-neutral-container rounded-radius-sm flex items-center justify-center">
                        <CreditCard size={24} weight="bold" className="text-neutral" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Visa ending in 4242</p>
                        <p className="text-sm text-secondary">Expires 12/2024</p>
                      </div>
                    </div>
                    <motion.div
                      className="mt-4"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Button
                        variant="outline"
                        color="neutral"
                        size="sm"
                      >
                        Update Payment Method
                      </Button>
                    </motion.div>
                  </div>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <h2 className="text-xl font-semibold text-foreground mb-4">Billing History</h2>
                  <div className="space-y-4">
                    {[
                      { id: 1, date: '2023-05-01', amount: '$99.00', status: 'Paid' },
                      { id: 2, date: '2023-04-01', amount: '$99.00', status: 'Paid' },
                      { id: 3, date: '2023-03-01', amount: '$99.00', status: 'Paid' },
                    ].map((invoice) => (
                      <motion.div
                        key={invoice.id}
                        className="bg-container rounded-radius-sm overflow-hidden"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div 
                          className="p-4 cursor-pointer flex justify-between items-center"
                          onClick={() => setExpandedInvoice(expandedInvoice === invoice.id ? null : invoice.id)}
                        >
                          <div>
                            <p className="font-semibold text-foreground">{invoice.date}</p>
                            <p className="text-sm text-secondary">{invoice.amount}</p>
                          </div>
                          <div className="flex items-center">
                            <Badge color="green" variant="soft">{invoice.status}</Badge>
                            {expandedInvoice === invoice.id ? <CaretUp size={16} weight="bold" className="ml-2" /> : <CaretDown size={16} weight="bold" className="ml-2" />}
                          </div>
                        </div>
                        <AnimatePresence>
                          {expandedInvoice === invoice.id && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="p-4 bg-container-high">
                                <LineItem label="Subtotal" value="$90.00" />
                                <LineItem label="Tax" value="$9.00" />
                                <LineItem label="Total" value="$99.00" isTotal />
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </TabsContent>
          )}
        </AnimatePresence>
      </Tabs>
    </motion.div>
  );
}

export default SettingsPage;
```