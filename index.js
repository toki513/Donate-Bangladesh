function getTextFieldValueById(id) {
    return document.getElementById(id);
}
function getTextFieldAmountById(id) {
    return parseFloat(document.getElementById(id).innerText);
}


function getInputFieldAmountById(id) {
    const inputValue = document.getElementById(id).value.trim();
        if (!/^\d+(\.\d+)?$/.test(inputValue)) {
        return NaN; 
    }
    return parseFloat(inputValue);
}

const blogBtn = getTextFieldValueById('blog-btn');
const faqSection = getTextFieldValueById('faq-section');
const donationHistoryBtn = getTextFieldValueById('donation-history-btn');

const historySection = getTextFieldValueById('history-section');
const donationSection = getTextFieldValueById('donation-section');

const noakhaliSection = getTextFieldValueById('noakhali-section');
const feniSection = getTextFieldValueById('feni-section');

const quotaSection = getTextFieldValueById('quota-section');
const home = getTextFieldValueById('home');
const blog = getTextFieldValueById('blog');
const defaultText = document.getElementById('default-text');


const noakhaliAmount = getTextFieldAmountById('noakhali-amount');
const feniAmount = getTextFieldAmountById('feni-amount');
const quotaAmount = getTextFieldAmountById('quota-amount');

const noakhaliTitle = getTextFieldValueById('noakhali-title').innerText
const feniTitle = getTextFieldValueById('feni-title').innerText
const quotaTitle = getTextFieldValueById('quota-title').innerText

function donateBtn(id){
    my_modal_1.showModal();
    defaultText.classList.add('hidden');
    document.getElementById(id).value = "";
}


document.getElementById('noakhali-btn').addEventListener('click', function () {
    const noakhaliInput = getInputFieldAmountById('noakhali-input');
    const balance = getTextFieldAmountById('balance');
    if (isNaN(noakhaliInput) || noakhaliInput < 0) {
        return alert('Invalid Donation Amount. Try Again')
    }else if(noakhaliInput > balance){
        return alert('InSufficient Balance')
    }
    else {
        const noakhaliNewAmount = noakhaliAmount + noakhaliInput;
        const newBalance = balance - noakhaliInput;

        document.getElementById('noakhali-amount').innerText = noakhaliNewAmount;
        document.getElementById('balance').innerText = newBalance;
        
        let div = document.createElement('div')
        div.innerHTML =`
         <div class="p-8 border border-slate-300 rounded-2xl ">
           <h3 class="text-xl font-bold text-primary mb-2"> ${noakhaliInput} Taka is ${noakhaliTitle} </h3>
           <p class="font-light text-secondary"> Date : ${new Date().toString()} </p>
        </div>
        `
        historySection.appendChild(div)
        donateBtn('noakhali-input');
        document.getElementById('modal-amount').innerText = noakhaliInput;
    }
})


document.getElementById('feni-btn').addEventListener('click', function () {
    const feniInput = getInputFieldAmountById('feni-input');
    const balance = getTextFieldAmountById('balance');
    if (isNaN(feniInput) || feniInput < 0) {
        return alert('Invalid Donation Amount. Try Again')
    }else if(feniInput > balance){
        return alert('InSufficient Balance')
    }
    else {
        const feniNewAmount = feniAmount + feniInput;
        const newBalance = balance - feniInput;

        document.getElementById('feni-amount').innerText = feniNewAmount;
        document.getElementById('balance').innerText = newBalance;

        let div = document.createElement('div');
        div.innerHTML = `
         <div class="p-8 border border-slate-300 rounded-2xl ">
           <h3 class="text-xl font-bold text-primary mb-2"> ${feniInput} Taka is ${feniTitle} </h3>
           <p class="font-light text-secondary"> Date : ${new Date().toString()} </p>
        </div>
        `
    historySection.appendChild(div)
    donateBtn('feni-input');
    document.getElementById('modal-amount').innerText = feniInput;
    }
});


document.getElementById('quota-btn').addEventListener('click', function () {
    const quotaInput = getInputFieldAmountById('quota-input');
    const balance = getTextFieldAmountById('balance');

    if (isNaN(quotaInput) || quotaInput < 0) {
        return alert('Invalid Donation Amount. Try Again')
    }else if(quotaInput > balance){
        return alert('InSufficient Balance')
    }
    else {
         const quotaNewAmount = quotaAmount + quotaInput;
        const newBalance = balance - quotaInput;

        document.getElementById('quota-amount').innerText = quotaNewAmount;
        document.getElementById('balance').innerText = newBalance;

        let div = document.createElement('div');
        div.innerHTML = `
         <div class="p-8 border border-slate-300 rounded-2xl ">
           <h3 class="text-xl font-bold text-primary mb-2"> ${quotaInput} Taka is ${quotaTitle} </h3>
           <p class="font-light text-secondary"> Date : ${new Date().toString()} </p>
        </div>
        `
    historySection.appendChild(div)
    donateBtn('quota-input');
    document.getElementById('modal-amount').innerText = quotaInput;

    }
})


function showSectionById1(id) {
    noakhaliSection.classList.add('hidden');
    feniSection.classList.add('hidden');
    quotaSection.classList.add('hidden');

    document.getElementById(id).classList.remove('hidden')
}
function showSectionById2(id) {
    noakhaliSection.classList.remove('hidden');
    feniSection.classList.remove('hidden');
    quotaSection.classList.remove('hidden');

    document.getElementById(id).classList.add('hidden')
}

function donationBtn() {
    showSectionById2('history-section');
    document.getElementById('history-btn').classList.remove('bg-btnColor');
    document.getElementById('donation-btn').classList.add('bg-btnColor')
}

function historyBtn() {
    showSectionById1('history-section');
    document.getElementById('history-btn').classList.add('bg-btnColor');
    document.getElementById('donation-btn').classList.remove('bg-btnColor')
}

blogBtn.addEventListener('click', function () { 
    window.location.href = 'blog.html'
})
