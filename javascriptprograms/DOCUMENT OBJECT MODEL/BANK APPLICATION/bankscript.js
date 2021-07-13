// var history = [];

function createAccount() {

    let account_number = acc_no.value;
    let name = nme.value;
    let balance = blnce.value;
    let mobile = mob_num.value;
    let email = mail.value;
    let password = pwd.value;
    let account = {
        account_number, name, balance, mobile, email, password
    }
    if (!(account_number in localStorage)) {
        localStorage.setItem(account_number, JSON.stringify(account))
        alert("account created")


        location.href = "./banklogin.html"
        
// history.push(JSON.parse(localStorage.getItem(account.account_number)))

    }
    else {
        alert("account already existed")
        window.location.reload(true)
    }
}


function login() {
    let acc_No = accno.value;
    let pssword = pwsd.value;
    let login = []
    login = JSON.parse(localStorage.getItem(acc_No))
    if (acc_No in localStorage) {
        if (acc_No == login.account_number) {
            if (pssword == login.password) {
                alert("Login success")
                sessionStorage.setItem("user", acc_No) // user=>1002
                location.href = "./home.html"
            }
            else {
                err.innerHTML = `!!!!incorrect password`
            }
        }
    }
    else {
        alert("account does not exit")
    }
}


function balanceEnquiry() {
    let user = sessionStorage.getItem("user") //1002
    let account = JSON.parse(localStorage.getItem(user))
    alert(account.balance)
}


var req = sessionStorage.getItem("user")
if (req) {
    litem.innerHTML = `Logout ${req}`;
}

function logout() {
    sessionStorage.removeItem("user")
    location.href = "./banklogin.html"
}

function fundTransfer() {
    let to_account_no = toaccno.value;
    let confirm_account_no = conaccno.value;
    let transfer_amount = amount.value;
    let logged_user = JSON.parse(localStorage.getItem(req))
    if (logged_user.balance < transfer_amount) {
        alert("Insufficient Balance")
    }
    else {
        logged_user.balance = Number(logged_user.balance) - Number(transfer_amount)
        localStorage.setItem(logged_user.account_number, JSON.stringify(logged_user))
        if (to_account_no in localStorage) {
            let transfer_user = JSON.parse(localStorage.getItem(to_account_no))
            to_account_no.balance = Number(to_account_no.balance) + Number(transfer_amount)
            localStorage.setItem(transfer_user.account_number, JSON.stringify(transfer_user))
            alert("Transaction Completed")
        }

    }

}







