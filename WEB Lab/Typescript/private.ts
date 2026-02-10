class Student {
    public name: string;
    public phone: number;
    constructor(name: string, phone: number) {
        this.name = name;
        this.phone = phone;
    }
}
const std_obj = new Student("student1", 8355914668);
std_obj.name = "student1";
console.log(`Name: ${std_obj.name}`);
console.log(`Phone: ${std_obj.phone}`)