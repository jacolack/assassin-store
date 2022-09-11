var stripe = Stripe('pk_test_51LggmoHGmMHAn17p6fEjTt37MdMe14aN4YzQlHTAoc7iAeI33biRs3aHtbMP4PmuCnO5eQgnqiq8f7Al3xTbPUNC00TT0shzr4', {
  apiVersion: "2022-08-01",
});


var paymentRequest = stripe.paymentRequest({
  country: 'US',
  currency: 'usd',
  total: {
    label: 'Demo total',
    amount: 1099,
  },
  requestPayerName: true,
  requestPayerEmail: true,
});



var elements = stripe.elements();
var prButton = elements.create('paymentRequestButton', {
  paymentRequest: paymentRequest,
});

// Check the availability of the Payment Request API first.
paymentRequest.canMakePayment().then(function (result) {
  if (result) {
    prButton.mount('#payment-request-button');
  } else {
    document.getElementById('payment-request-button').style.display = 'none';
  }
});
