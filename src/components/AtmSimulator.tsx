import React, { useState } from 'react';
import {
  CreditCard,
  DollarSign,
  Lock,
  RefreshCw,
  CheckCircle2,
  ListOrdered,
  KeyRound,
  Building,
  UserCheck,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react';

interface Transaction {
  id: string;
  type: 'Deposit' | 'Withdrawal' | 'PIN Change';
  amount?: number;
  date: string;
  status: 'SUCCESS' | 'COMPLETED';
  balanceAfter: number;
}

export const AtmSimulator: React.FC = () => {
  const [pin, setPin] = useState('1234');
  const [enteredPin, setEnteredPin] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [accountNumber] = useState('3098-4412-8890');
  const [accountHolder] = useState('GAUTAM KUMAR');
  const [balance, setBalance] = useState(15450);
  const [screen, setScreen] = useState<'menu' | 'deposit' | 'withdraw' | 'balance' | 'statement' | 'pin-change'>('menu');
  const [inputAmount, setInputAmount] = useState('');
  const [newPinInput, setNewPinInput] = useState('');
  const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null);
  const [transactions, setTransactions] = useState<Transaction[]>([
    { id: 'TXN-101', type: 'Deposit', amount: 5000, date: '2026-07-20 10:15', status: 'SUCCESS', balanceAfter: 15450 },
    { id: 'TXN-100', type: 'Deposit', amount: 10450, date: '2026-07-15 14:22', status: 'SUCCESS', balanceAfter: 10450 },
  ]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (enteredPin === pin) {
      setIsAuthenticated(true);
      setMessage(null);
    } else {
      setMessage({ text: 'Invalid PIN! (Default demo PIN is 1234)', type: 'error' });
    }
  };

  const handleDeposit = (e: React.FormEvent) => {
    e.preventDefault();
    const amt = parseFloat(inputAmount);
    if (isNaN(amt) || amt <= 0) {
      setMessage({ text: 'Please enter a valid amount', type: 'error' });
      return;
    }
    const newBal = balance + amt;
    setBalance(newBal);
    const newTxn: Transaction = {
      id: `TXN-${Math.floor(1000 + Math.random() * 9000)}`,
      type: 'Deposit',
      amount: amt,
      date: new Date().toLocaleString(),
      status: 'SUCCESS',
      balanceAfter: newBal,
    };
    setTransactions([newTxn, ...transactions]);
    setMessage({ text: `Successfully deposited $${amt.toLocaleString()}!`, type: 'success' });
    setInputAmount('');
    setScreen('menu');
  };

  const handleWithdraw = (e: React.FormEvent) => {
    e.preventDefault();
    const amt = parseFloat(inputAmount);
    if (isNaN(amt) || amt <= 0) {
      setMessage({ text: 'Please enter a valid amount', type: 'error' });
      return;
    }
    if (amt > balance) {
      setMessage({ text: 'Insufficient balance!', type: 'error' });
      return;
    }
    const newBal = balance - amt;
    setBalance(newBal);
    const newTxn: Transaction = {
      id: `TXN-${Math.floor(1000 + Math.random() * 9000)}`,
      type: 'Withdrawal',
      amount: amt,
      date: new Date().toLocaleString(),
      status: 'SUCCESS',
      balanceAfter: newBal,
    };
    setTransactions([newTxn, ...transactions]);
    setMessage({ text: `Successfully withdrew $${amt.toLocaleString()}!`, type: 'success' });
    setInputAmount('');
    setScreen('menu');
  };

  const handlePinChange = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPinInput.length !== 4 || isNaN(Number(newPinInput))) {
      setMessage({ text: 'PIN must be a 4-digit number', type: 'error' });
      return;
    }
    setPin(newPinInput);
    const newTxn: Transaction = {
      id: `TXN-${Math.floor(1000 + Math.random() * 9000)}`,
      type: 'PIN Change',
      date: new Date().toLocaleString(),
      status: 'SUCCESS',
      balanceAfter: balance,
    };
    setTransactions([newTxn, ...transactions]);
    setMessage({ text: 'PIN changed successfully!', type: 'success' });
    setNewPinInput('');
    setScreen('menu');
  };

  return (
    <div className="p-4 sm:p-6 rounded-2xl bg-slate-900 border border-slate-800 text-slate-100 shadow-2xl space-y-4">
      {/* Java Swing Desktop ATM Header Bar */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-rose-500 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
          </div>
          <span className="text-xs font-mono text-slate-400 ml-2">
            Java Swing Desktop ATM [MySQL JDBC Backend]
          </span>
        </div>
        <span className="text-xs font-mono text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">
          Java JDBC Simulator
        </span>
      </div>

      {!isAuthenticated ? (
        /* PIN Login Window */
        <div className="py-8 max-w-sm mx-auto text-center space-y-5">
          <div className="w-12 h-12 rounded-2xl bg-blue-600/20 border border-blue-500/30 text-blue-400 flex items-center justify-center mx-auto">
            <CreditCard className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-bold">ATM System Authentication</h3>
            <p className="text-xs text-slate-400 mt-1">
              Enter 4-digit PIN (Default: <code className="text-emerald-400 bg-slate-800 px-1 py-0.5 rounded">1234</code>)
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-3">
            <input
              type="password"
              maxLength={4}
              value={enteredPin}
              onChange={(e) => setEnteredPin(e.target.value)}
              placeholder="Enter PIN"
              className="w-full px-4 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-center text-xl font-mono tracking-widest focus:outline-none focus:border-blue-500"
            />
            <button
              type="submit"
              className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 font-semibold text-sm transition-all"
            >
              Verify PIN & Login
            </button>
          </form>

          {message && (
            <p className={`text-xs font-medium ${message.type === 'error' ? 'text-rose-400' : 'text-emerald-400'}`}>
              {message.text}
            </p>
          )}
        </div>
      ) : (
        /* ATM Application Screen */
        <div className="space-y-4">
          {/* Top Bar Account Info */}
          <div className="flex flex-wrap items-center justify-between bg-slate-800/80 p-3 rounded-xl border border-slate-700/60 text-xs font-mono">
            <div>
              <span className="text-slate-400">Account: </span>
              <span className="text-white font-bold">{accountNumber}</span>
              <span className="text-slate-500 ml-2">({accountHolder})</span>
            </div>
            <button
              onClick={() => {
                setIsAuthenticated(false);
                setEnteredPin('');
                setScreen('menu');
              }}
              className="text-rose-400 hover:underline"
            >
              Exit / Logout
            </button>
          </div>

          {message && (
            <div className={`p-3 rounded-xl text-xs font-medium ${message.type === 'error' ? 'bg-rose-500/10 text-rose-300 border border-rose-500/30' : 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/30'}`}>
              {message.text}
            </div>
          )}

          {screen === 'menu' && (
            <div className="grid grid-cols-2 gap-3 pt-2">
              <button
                onClick={() => { setMessage(null); setScreen('balance'); }}
                className="p-4 rounded-xl bg-slate-800/90 hover:bg-slate-800 border border-slate-700/80 text-left transition-all hover:border-blue-500/50"
              >
                <DollarSign className="w-5 h-5 text-emerald-400 mb-1" />
                <div className="font-semibold text-sm">Balance Enquiry</div>
                <div className="text-[11px] text-slate-400">View real-time balance</div>
              </button>

              <button
                onClick={() => { setMessage(null); setScreen('deposit'); }}
                className="p-4 rounded-xl bg-slate-800/90 hover:bg-slate-800 border border-slate-700/80 text-left transition-all hover:border-blue-500/50"
              >
                <ArrowRight className="w-5 h-5 text-blue-400 mb-1" />
                <div className="font-semibold text-sm">Deposit Money</div>
                <div className="text-[11px] text-slate-400">Credit cash to MySQL</div>
              </button>

              <button
                onClick={() => { setMessage(null); setScreen('withdraw'); }}
                className="p-4 rounded-xl bg-slate-800/90 hover:bg-slate-800 border border-slate-700/80 text-left transition-all hover:border-blue-500/50"
              >
                <CreditCard className="w-5 h-5 text-amber-400 mb-1" />
                <div className="font-semibold text-sm">Cash Withdrawal</div>
                <div className="text-[11px] text-slate-400">Debit account balance</div>
              </button>

              <button
                onClick={() => { setMessage(null); setScreen('statement'); }}
                className="p-4 rounded-xl bg-slate-800/90 hover:bg-slate-800 border border-slate-700/80 text-left transition-all hover:border-blue-500/50"
              >
                <ListOrdered className="w-5 h-5 text-violet-400 mb-1" />
                <div className="font-semibold text-sm">Mini-Statement</div>
                <div className="text-[11px] text-slate-400">View transaction history</div>
              </button>

              <button
                onClick={() => { setMessage(null); setScreen('pin-change'); }}
                className="col-span-2 p-3 rounded-xl bg-slate-800/60 hover:bg-slate-800 border border-slate-700/50 text-left flex items-center justify-between transition-all"
              >
                <div className="flex items-center gap-2">
                  <KeyRound className="w-4 h-4 text-rose-400" />
                  <span className="font-medium text-xs">Change ATM Security PIN</span>
                </div>
                <span className="text-[10px] font-mono text-slate-400">Update Auth Hash</span>
              </button>
            </div>
          )}

          {screen === 'balance' && (
            <div className="p-5 rounded-xl bg-slate-800/90 border border-slate-700 space-y-4 text-center">
              <span className="text-xs text-slate-400 uppercase tracking-widest font-mono">Current Available Balance</span>
              <div className="text-3xl font-extrabold text-emerald-400 font-mono">
                ${balance.toLocaleString()}
              </div>
              <p className="text-xs text-slate-400">Verified via JDBC MySQL Connection</p>
              <button
                onClick={() => setScreen('menu')}
                className="px-4 py-2 rounded-lg bg-slate-700 hover:bg-slate-600 text-xs font-semibold"
              >
                Back to Menu
              </button>
            </div>
          )}

          {(screen === 'deposit' || screen === 'withdraw') && (
            <form onSubmit={screen === 'deposit' ? handleDeposit : handleWithdraw} className="space-y-3">
              <h4 className="text-sm font-semibold text-slate-200">
                {screen === 'deposit' ? 'Deposit Funds' : 'Withdraw Cash'}
              </h4>
              <input
                type="number"
                value={inputAmount}
                onChange={(e) => setInputAmount(e.target.value)}
                placeholder="Enter amount ($)"
                className="w-full px-4 py-2.5 rounded-xl bg-slate-800 border border-slate-700 font-mono text-lg focus:outline-none focus:border-blue-500"
              />
              <div className="flex gap-2">
                <button
                  type="submit"
                  className="flex-1 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 font-semibold text-sm"
                >
                  Confirm {screen === 'deposit' ? 'Deposit' : 'Withdrawal'}
                </button>
                <button
                  type="button"
                  onClick={() => setScreen('menu')}
                  className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-sm font-semibold"
                >
                  Cancel
                </button>
              </div>
            </form>
          )}

          {screen === 'pin-change' && (
            <form onSubmit={handlePinChange} className="space-y-3">
              <h4 className="text-sm font-semibold text-slate-200">Change ATM PIN</h4>
              <input
                type="password"
                maxLength={4}
                value={newPinInput}
                onChange={(e) => setNewPinInput(e.target.value)}
                placeholder="Enter new 4-digit PIN"
                className="w-full px-4 py-2.5 rounded-xl bg-slate-800 border border-slate-700 font-mono text-lg text-center tracking-widest focus:outline-none focus:border-blue-500"
              />
              <div className="flex gap-2">
                <button
                  type="submit"
                  className="flex-1 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 font-semibold text-sm"
                >
                  Update PIN
                </button>
                <button
                  type="button"
                  onClick={() => setScreen('menu')}
                  className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-sm font-semibold"
                >
                  Cancel
                </button>
              </div>
            </form>
          )}

          {screen === 'statement' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-semibold text-slate-200">Recent Transactions (MySQL)</h4>
                <button
                  onClick={() => setScreen('menu')}
                  className="text-xs text-blue-400 hover:underline"
                >
                  Back to Menu
                </button>
              </div>
              <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                {transactions.map((txn) => (
                  <div
                    key={txn.id}
                    className="p-2.5 rounded-lg bg-slate-800/80 border border-slate-700/60 flex items-center justify-between text-xs"
                  >
                    <div>
                      <div className="font-semibold text-slate-200">{txn.type} ({txn.id})</div>
                      <div className="text-[10px] text-slate-400">{txn.date}</div>
                    </div>
                    <div className="text-right">
                      {txn.amount && (
                        <div className={`font-mono font-bold ${txn.type === 'Deposit' ? 'text-emerald-400' : 'text-rose-400'}`}>
                          {txn.type === 'Deposit' ? '+' : '-'}${txn.amount.toLocaleString()}
                        </div>
                      )}
                      <div className="text-[10px] text-slate-400 font-mono">Bal: ${txn.balanceAfter.toLocaleString()}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
