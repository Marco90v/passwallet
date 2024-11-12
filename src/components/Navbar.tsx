import NavButton from '@components/NavButton';
import { Shield, Key, Plus, HelpCircle, LogOut, Home } from 'lucide-react';
import Button from './Button';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: itemsNavValue) => void;
  onLogout: () => void;
}

const arrPages:IPage[] = [
  {label: 'Items', value: 'items', icon: <Home />},
  {label: 'Add New', value: 'add', icon: <Plus />},
  {label: 'Password', value: 'password', icon: <Key />},
  {label: 'Help', value: 'help', icon: <HelpCircle />},
];

const Navbar = ({currentPage, onNavigate, onLogout}:NavbarProps) => {
  return (
    <nav className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <Shield className="h-8 w-8 text-indigo-600" />
                <span className="ml-2 text-xl font-bold text-slate-800">PassWallet</span>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                {
                  arrPages.map((page, index) => {
                    return (
                      <NavButton
                        key={index}
                        icon={page.icon}
                        label={page.label}
                        isActive={currentPage === page.value}
                        onClick={() => onNavigate(page.value)}
                      />
                    );
                  })
                }
              </div>
            </div>
            <div className="flex items-center">
              <Button
                onClick={onLogout}
                className="px-4 py-2 border text-sm rounded-md font-medium text-slate-700 hover:text-slate-900 hover:bg-red-600"
              >
                <LogOut className="h-5 w-5 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </nav>
  );
};

export default Navbar;