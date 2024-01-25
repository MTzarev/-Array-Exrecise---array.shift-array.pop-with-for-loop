function reverse(n, arr) {
    arr.push(n);
    let print = "";
    for (let i = arr.pop()-1 ; i >= 0; i--) {
        print += Number(arr[i]) + " ";

    }




    console.log(print);
}
reverse(3, [10, 20, 30, 40, 50]);
reverse(4, [-1, 20, 99, 5]);
reverse(2, [66, 43, 75, 89, 47]);