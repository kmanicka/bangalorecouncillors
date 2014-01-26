angular.module('starter.controllers', [])


.controller('ContactIndexCtrl', function($scope, ContactService) {
  $scope.contacts = ContactService.all();
})

.controller('ContactDetailCtrl', function($scope, $stateParams, ContactService) {
  $scope.contact = ContactService.get($stateParams.contactId);
  
  $scope.addToContacts = function() {
      var contact = navigator.contacts.create({"displayName": $scope.contact.Name});

      var phoneNumbers = [];
  	  phoneNumbers[0] = new ContactField('mobile', $scope.contact.PhoneNumber , true);
  	  contact.phoneNumbers = phoneNumbers;

        var addresses = [];
  	  addresses[0] = new ContactAddress();
  	  addresses[0].pref = true;
  	  addresses[0].type = 'office';
  	  addresses[0].formatted = $scope.contact.Address;

  	  contact.addresses = addresses;

  	  // save the contact
  	  contact.save();

      alert('Added to contact ' + $scope.contact.Name);
  };

  $scope.getAddress = function() {
  	return encodeURIComponent($scope.contact.Address);
  };

  $scope.getWard = function() {
  	return encodeURIComponent($scope.contact.WardName + ',' + $scope.contact.AssemblyConstituency + ',Bangalore' );
  };

})


.controller('AddToContactCtrl', function($scope, $stateParams, ContactService) {
  $scope.contact = ContactService.get($stateParams.contactId);
  alert('added contact ' + $scope.contact.Name);
});
