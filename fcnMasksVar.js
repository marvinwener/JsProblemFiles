var mask_a = 3;

function mask_b() {
    var mask_a = 10; // Shadowing
}

mask_b(mask_a);

if (true) {
    let mask_a = 5;
}