export default class Employee {
  // constructor
  constructor(id, name, phone, title) {
    this.id = id;
    this.name = name;
    this.phone = phone;
    this.title = title;
  }
  // updateName

  updateName(name) {
    this.name = name;
  }
  
   // updatePhone
  updatePhone(phone) {
    this.phone = phone;
  }

   // updateTitle
  updateTitle(title) {
    this.title = title;
  }

}