import { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Button } from './ui/button';
import { Mail, Phone, Eye, EyeOff } from 'lucide-react';
import { useLanguage } from './LanguageContext';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const { t } = useLanguage();
  const [showPassword, setShowPassword] = useState(false);
  const [emailForm, setEmailForm] = useState({ email: '', password: '' });
  const [phoneForm, setPhoneForm] = useState({ phone: '', password: '' });

  const handleEmailLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email login:', emailForm);
    alert(`Login with email: ${emailForm.email}`);
    onClose();
  };

  const handlePhoneLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Phone login:', phoneForm);
    alert(`Login with phone: ${phoneForm.phone}`);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-white dark:bg-[#0f1f2e] border-blue-100 dark:border-gray-700 text-gray-900 dark:text-white shadow-2xl">
        <DialogHeader>
          <DialogTitle className="text-center bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent dark:text-white dark:bg-none">
            {t('login.title')}
          </DialogTitle>
          <DialogDescription className="text-center text-gray-600 dark:text-gray-400">
            {t('login.subtitle')}
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="email" className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-blue-50 dark:bg-gray-800">
            <TabsTrigger value="email" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-teal-500 data-[state=active]:text-white">
              <Mail size={16} className="mr-2" />
              {t('contact.email')}
            </TabsTrigger>
            <TabsTrigger value="phone" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-teal-500 data-[state=active]:text-white">
              <Phone size={16} className="mr-2" />
              {t('contact.phone')}
            </TabsTrigger>
          </TabsList>

          {/* Email Login Tab */}
          <TabsContent value="email" className="space-y-4 mt-6">
            <form onSubmit={handleEmailLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-700">
                  {t('contact.email')}
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder={t('login.emailPlaceholder')}
                  value={emailForm.email}
                  onChange={(e) => setEmailForm({ ...emailForm, email: e.target.value })}
                  required
                  className="bg-blue-50 dark:bg-gray-800 border-blue-200 dark:border-gray-700 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email-password" className="text-gray-700">
                  {t('login.password')}
                </Label>
                <div className="relative">
                  <Input
                    id="email-password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder={t('login.passwordPlaceholder')}
                    value={emailForm.password}
                    onChange={(e) => setEmailForm({ ...emailForm, password: e.target.value })}
                    required
                    className="bg-blue-50 dark:bg-gray-800 border-blue-200 dark:border-gray-700 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-300 dark:text-gray-400 dark:hover:text-gray-300 light:text-gray-600 light:hover:text-gray-800"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <a href="#" className="text-teal-400 hover:text-teal-300 dark:text-teal-400 dark:hover:text-teal-300 light:text-blue-600 light:hover:text-blue-700 text-sm">
                  {t('login.forgotPassword')}
                </a>
              </div>

              <Button type="submit" className="w-full bg-teal-500 hover:bg-teal-600 dark:bg-teal-500 dark:hover:bg-teal-600 light:bg-gradient-to-r light:from-blue-600 light:to-teal-500 light:hover:from-blue-700 light:hover:to-teal-600 light:shadow-lg">
                {t('login.loginButton')}
              </Button>

              <div className="text-center text-gray-400 dark:text-gray-400 light:text-gray-600 text-sm">
                {t('login.noAccount')}{' '}
                <a href="#" className="text-teal-400 hover:text-teal-300 dark:text-teal-400 dark:hover:text-teal-300 light:text-blue-600 light:hover:text-blue-700">
                  {t('login.register')}
                </a>
              </div>
            </form>
          </TabsContent>

          {/* Phone Login Tab */}
          <TabsContent value="phone" className="space-y-4 mt-6">
            <form onSubmit={handlePhoneLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-gray-700">
                  {t('contact.phone')}
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder={t('login.emailPlaceholder')}
                  value={phoneForm.phone}
                  onChange={(e) => setPhoneForm({ ...phoneForm, phone: e.target.value })}
                  required
                  className="bg-blue-50 dark:bg-gray-800 border-blue-200 dark:border-gray-700 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone-password" className="text-gray-700">
                  {t('login.password')}
                </Label>
                <div className="relative">
                  <Input
                    id="phone-password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder={t('login.passwordPlaceholder')}
                    value={phoneForm.password}
                    onChange={(e) => setPhoneForm({ ...phoneForm, password: e.target.value })}
                    required
                    className="bg-blue-50 dark:bg-gray-800 border-blue-200 dark:border-gray-700 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-300 dark:text-gray-400 dark:hover:text-gray-300 light:text-gray-600 light:hover:text-gray-800"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <a href="#" className="text-teal-400 hover:text-teal-300 dark:text-teal-400 dark:hover:text-teal-300 light:text-blue-600 light:hover:text-blue-700 text-sm">
                  {t('login.forgotPassword')}
                </a>
              </div>

              <Button type="submit" className="w-full bg-teal-500 hover:bg-teal-600 dark:bg-teal-500 dark:hover:bg-teal-600 light:bg-gradient-to-r light:from-blue-600 light:to-teal-500 light:hover:from-blue-700 light:hover:to-teal-600 light:shadow-lg">
                {t('login.loginButton')}
              </Button>

              <div className="text-center text-gray-400 dark:text-gray-400 light:text-gray-600 text-sm">
                {t('login.noAccount')}{' '}
                <a href="#" className="text-teal-400 hover:text-teal-300 dark:text-teal-400 dark:hover:text-teal-300 light:text-blue-600 light:hover:text-blue-700">
                  {t('login.register')}
                </a>
              </div>
            </form>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}

