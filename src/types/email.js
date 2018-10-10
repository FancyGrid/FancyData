let email = {
  config: {
    action: "email",
    required: ['name', 'surname'],
    tpl: "{name}.{surname}@{site}",
    site: "gmail.com"
  }
};

export default email;