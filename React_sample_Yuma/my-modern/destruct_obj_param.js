function greet(obj) {
    console.log(`こんにちは、私は${obj.name}、${obj.age}歳です。`);
}

const my = { name: '佐藤理央', sex: 'female', age: 18 };
greet(my);
