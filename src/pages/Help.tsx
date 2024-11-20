import { Shield, Key, Lock, AlertTriangle } from 'lucide-react';
import Section from '@components/Section';

export function Help() {
  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow">
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-slate-800 mb-6">How to Use SecureVault</h2>
        
        <div className="space-y-8">
          <Section
            icon={<Shield className="h-8 w-8 text-indigo-600" />}
            title="Secure Password Storage"
            description="PassWallet uses advanced encryption to keep your passwords safe. All data is encrypted locally before being stored, ensuring that only you can access your passwords."
          />
          
          <Section
            icon={<Key className="h-8 w-8 text-indigo-600" />}
            title="Managing Passwords"
            description="Add, edit, and delete passwords easily. Organize them by categories (Social, Banking, Other) and use the filter to quickly find what you need."
          />
          
          <Section
            icon={<Lock className="h-8 w-8 text-indigo-600" />}
            title="Master Password"
            description="Your master password is the key to all your stored passwords. Make sure to choose a strong master password and change it periodically."
          />
          
          <Section
            icon={<AlertTriangle className="h-8 w-8 text-indigo-600" />}
            title="Security Tips"
            description="Use unique, complex passwords for each account. Enable two-factor authentication when available. Never share your master password with anyone."
          />
        </div>
      </div>
    </div>
  );
}

