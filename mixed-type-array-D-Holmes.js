let userProfile = ['Darren',
     50,
      false,
       {city: 'Fenton'},
        ['fishing', 'hunting', 'sports']
    ];
console.log('UserName: ', userProfile[0]); // access the first Element Name
console.log('Second Hobby: ', userProfile[4][1]) // Access the Array [4] and the second Element [1] of the Array

userProfile[1] = 25; // modify the age to 25
userProfile[4].push('JavaScript'); // adding hobby JavaScript to the Array

console.log('Updated Profile: ', userProfile); // log the updated profile
