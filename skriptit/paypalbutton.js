var token = config.LASKURI;
function initPayPalButton() {
	paypal.Buttons({
	  style: {
		shape: 'pill',
		color: 'gold',
		layout: 'vertical',
		label: 'paypal',
		
	  },

	  createOrder: function(data, actions) {
		return actions.order.create({
		  purchase_units: [{"description":"Laskuri","amount":{"currency_code":"EUR","value":9.99,"breakdown":{"item_total":{"currency_code":"EUR","value":8.06},"shipping":{"currency_code":"EUR","value":0},"tax_total":{"currency_code":"EUR","value":1.93}}}}]
		});
	  },

	  onApprove: function(data, actions) {
		return actions.order.capture().then(function(orderData) {
		  
		  // Full available details
		  console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));
		  actions.redirect('https://drive.google.com/uc?export=download&id='+token);

		  /*
		  // Show a success message within this page, e.g.
		  const element = document.getElementById('paypal-button-container');
		  element.innerHTML = '';
		  element.innerHTML = '<h3>Kiitos maksustasi! Maksusuoritus on vastaanotettu hyväksytysti.</h3>';
		  */
		  
		});
	  },

	  onError: function(err) {
		console.log(err);
	  }
	}).render('#paypal-button-container');
  }
  initPayPalButton();