
interface BankAccount {
    name: string;
    age: number;
    accountNumber: string;
    balance: number;
}

/**
 *  Bank class that manages all bank accounts in the bank
 */

export default class Bank {
    
    private accounts: BankAccount[] = [];

    /**
     * Method to find a bank account in the bank
     * @param {string} accountNumber Account number of the bank account to find
     * @returns Bank account if found, undefined otherwise
     */
    private findAccount(accountNumber: string): BankAccount | undefined {
        return this.accounts.find(account => account.accountNumber === accountNumber);
    }

    /**
     * Method to create a unique bank account
     * @param name -- name of the customer
     * @param age -- age of the customer
     * @param accountNumber -- account number of the customer
     * @returns BankAccount -- the created account
     */
    public createAccount(name: string, age: number, accountNumber: string): BankAccount {
        const isAccExists = this.findAccount(accountNumber);
        if(isAccExists) {
            throw new Error("Account already exists");
        }
        const account: BankAccount = {
            name,
            age,
            accountNumber,
            balance: 0
        };
        this.accounts.push(account);
        return account;
    }

    /**
     * Deposit funds into an already existing account
     * @param accountNumber -- account to be deposited in
     * @param deposit -- amount to deposit in account
     * @returns bool -- returns true if successful deposit, else returns corresponding error

     public deposit(accountNumber: string, deposit: number) {
         if (deposit < 0) {
             throw new Error("Cannot deposit negative funds!");
             )

         const account = this.findaccount(accountNumber); 
             if (!account) {
                 throw new Error("Account not found!");
             
            
     

    
}
