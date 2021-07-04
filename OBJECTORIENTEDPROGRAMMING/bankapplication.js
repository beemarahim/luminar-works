// createAccount()
// deposit()
// withdrawal()
// balanceEnquiry()


class Bank {
    // createAccount(account_number,name,balance){
    //     this.account_number=account_number;
    //     this.name=name;
    //     this.balance=balance;
    // }
    status = 0;
    accounts = {
        1000: { account_number: 1000, name: "ajay", balance: 1000, username: 1000, password: "userone" },
        1001: { account_number: 1001, name: "vjay", balance: 2000, username: 1001, password: "usertwo" },
        1002: { account_number: 1002, name: "ram", balance: 3000, username: 1002, password: "userthree" },
        1003: { account_number: 1003, name: "ravi", balance: 4000, username: 1003, password: "userfour" }
    }


    getAccountDetails() {

        return this.accounts
    }

    authenticate(username, pwd) {
        let account_details = this.getAccountDetails()
        if (username in account_details) {
            if (pwd == account_details[username]["password"]) {
                this.status = 1
                return username// success
            }
            else {
                return -1 // invalid password
            }
        }
        else {
            return 0// invalid username 
        }
    }


    // deposit(amt) {
    //     this.balance += amt;
    //     console.log(`your account ${this.account_number} has been credited with ${amt} your aval balance is:${this.balance}`);
    // }
    // withdrawal(amt) {
    //     if (this.balance < amt) {
    //         console.log(`transaction failed insufficient balance `);
    //     }
    //     else {
    //         this.balance -= amt;
    //         console.log(`your account ${this.account_number} has been debited with ${amt} your aval balance is:${this.balance}`);
    //     }

    // }
    // balanceEnq() {
    //     console.log(`aval balance is :${this.balance}`);

    // }

    balanceEnquiry(account_number) {
        if (this.status == 1) {
            return this.accounts[account_number]["balance"]

        }
        return "invalid session"
    }

    fundTransfer(from_account, to_account, amount) {
        if (this.status == 1) {
            let bal = this.balanceEnquiry(from_account)
            if (bal >= amount) {
                if (to_account in this.accounts) {
                    this.accounts[from_account]["balance"] -= amount;
                    this.accounts[to_account]["balance"] += amount;
                }
                else {
                    console.log("invalid to account number");
                }

            }
        }
        else {
            console.log("invalid session");
        }
    }
    logout(user){
        this.status=0;
    }
}

// var obj1=new Bank()
// obj1.createAccount(1000,"ajay",25000)
// obj1.deposit(2000)
// obj1.balanceEnq()

var obj1 = new Bank()
var user = obj1.authenticate(1000, "userone")
// var res=user==0?"invalid":user==-1?"invalid password":"success"
// console.log(res);
obj1.logout(user)
obj1.fundTransfer(user, 1001, 200)
console.log(obj1.balanceEnquiry(user));