function descendingOrder(n) {
  //...

  console.log(
    Number(
      String(n)
        .split("")
        .sort((a, b) => b - a)
        .join("")
    )
  );
}

descendingOrder(12345);
