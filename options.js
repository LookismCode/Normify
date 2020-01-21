function save_options() {
  var name = document.getElementById('name').value;
  var description = document.getElementById('description').value;
  var logoUrl = document.getElementById('logoUrl').value;
  var smallLogoUrl = document.getElementById('smallLogoUrl').value;

  chrome.storage.sync.set({
    name: name,
    description: description,
    logoUrl: logoUrl,
    smallLogoUrl: smallLogoUrl,
  }, function() {
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 1500);
  });
}


function restore_options() {
  chrome.storage.sync.get({
    name: 'Technology and Philosophy Forum',
    description: 'Technology.NET- Technology, Philosophy and Political Discussion',
    logoUrl: 'https://cdn0.iconfinder.com/data/icons/abstract-electronics/64/cloud_technology-512.png',
    smallLogoUrl: 'https://image.flaticon.com/icons/svg/2471/2471463.svg'
  }, function(items) {
    document.getElementById('name').value = items.name;
    document.getElementById('description').value = items.description;
    document.getElementById('logoUrl').value = items.logoUrl;
    document.getElementById('smallLogoUrl').value = items.smallLogoUrl;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);