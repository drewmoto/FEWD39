for (x = 0; x < 21; x++)
{
  if (x % 2 == 0)
  {
    console.log("even");
  }
  else
  {
    console.log("odd");
  }
}

// ==================================


function maxOfThree(1, 2, 3) {
	if (1 > 2) {
		if (1 > 3) {
			return 1;
		}
		else {
			return 3;
		}
	}
	else if (2 > 3) {
		return 2;
	}
	else {
		return 3;
	}
}
