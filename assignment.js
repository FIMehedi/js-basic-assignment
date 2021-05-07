
function kilometerToMeter(kilometer) {
    if (typeof(kilometer) == 'number' && kilometer >= 0) {

        return kilometer * 1000;
    }
    else {
        return 'Kilometer should be a positive number.';
    }
}


function budgetCalculator(watch, phone, laptop) {
    if (Number.isInteger(watch) && watch >= 0 && Number.isInteger(phone) && phone >= 0 && Number.isInteger(laptop) && laptop >= 0) {
        return (watch * 50) + (phone * 100) + (laptop * 500)
    }
    else {
        return 'All arguments should be positive integer.';
    }

}


function hotelCost(days) {
    if (Number.isInteger(days) && days >= 0) {
        var totalCost = 0;

        if (days <= 10) {
            totalCost = days * 100;
        }
        else if (days <= 20) {
            var firstCost = 10 * 100;
            var secondCost = (days - 10) * 80;
            totalCost = firstCost + secondCost;
        }
        else {
            var firstCost = 10 * 100;
            var secondCost = 10 * 80;
            var thirdCost = (days - 20) * 50;
            totalCost = firstCost + secondCost + thirdCost;
        }

        return totalCost;

    }
    else {
        return 'Days should be a positive integer.';
    }
}


function megaFriend(friends) {
    if (Array.isArray(friends)) {
        var largestName = friends[0];
        for (var i = 0; i < friends.length; i++) {
            if (typeof(friends[i]) == 'string' && friends[i].trim().length > largestName.length ) {
                largestName = friends[i];
                console.log('Yes')
            }
        }
        return largestName;
    }
    else {
        return 'Argument should be an array';
    }
}
