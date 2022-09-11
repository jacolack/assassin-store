var stripe = Stripe('pk_test_51JcDZ8FCU9HJc0siITqNZmr7Q0mWZKz9FWFh89G8REzHPV2IFtEvdzlai7Ia8wGbXM6FgW5ZxJhCm9xTtS7iKDCB00e65TKIIN', {
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
