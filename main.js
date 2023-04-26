const nodeurl = 'https://spinthewheelbackend.onrender.com/';
// const nodeurl = 'http://localhost:5000/';

document.addEventListener("DOMContentLoaded", () => {

    if (window.localStorage.length === 0) {
        window.location.href = "/";
    }
    else {


        const spinLocData = JSON.parse(localStorage.getItem('spin data'));

        const wheel = document.getElementById("wheel").getContext("2d");
        const spinBtn = document.getElementById("spin-btn");
        const finalValue = document.getElementById("final-value");
        //Object that stores values of minimum and maximum angle for a value

        const totalSpin = spinLocData && spinLocData.totalSpin || 2000;

        const dayWinner = spinLocData.totalWinner;

        const dayLooser = totalSpin - dayWinner;

        const percentageOfWin = (100 * dayWinner) / totalSpin;
        const percentageOfLoos = (100 * dayLooser) / totalSpin;

        const probalityOfWin = (percentageOfWin / 100);
        const probalityOfLoos = (percentageOfLoos / 100);

        const divideProbalityOfWin = (probalityOfWin / 3);
        const divideProbalityOfloss = (probalityOfLoos / 3);

        const T = localStorage.getItem("thomsonwinCount");
        const K = localStorage.getItem("kodakwinCount");
        const B = localStorage.getItem("blauwinCount");

        console.log(T == 50)

        console.log("totalSpin " + totalSpin)
        console.log("dayWinner " + dayWinner)
        console.log("dayLooser " + dayLooser)
        console.log("percentageOfWin " + percentageOfWin)
        console.log("percentageOfLoos " + percentageOfLoos)

        console.log("probalityOfWin " + probalityOfWin)
        console.log("probalityOfLoos " + probalityOfLoos)
        console.log("divideProbalityOfWin " + divideProbalityOfWin)


        const value = () => {
            let rotationValues = [];
            if (T < 50 && B < 50 && K < 50) {
                
                 rotationValues = [
                    { minDegree: 0, maxDegree: 60, value: 1, prizeVal: 1, name: 'You won Thomson goodies !', probability: divideProbalityOfWin },
                    { minDegree: 61, maxDegree: 120, value: 2, prizeVal: 0, name: 'Better luck next Time', probability: divideProbalityOfloss },
                    { minDegree: 121, maxDegree: 180, value: 3, prizeVal: 1, name: 'You won Kodak goodies !', probability: divideProbalityOfWin },
                    { minDegree: 181, maxDegree: 240, value: 4, prizeVal: 0, name: 'Better luck next Time', probability: divideProbalityOfloss },
                    { minDegree: 241, maxDegree: 300, value: 5, prizeVal: 1, name: 'You won Blaupunkt goodies !', probability: divideProbalityOfWin },
                    { minDegree: 301, maxDegree: 360, value: 6, prizeVal: 0, name: 'Better luck next Time', probability: divideProbalityOfloss },
                ];
            }
            else if (T < 50 && B < 50 && K == 50) {
                
                rotationValues = [
                    { minDegree: 0, maxDegree: 60, value: 1, prizeVal: 1, name: 'You won Thomson goodies !', probability: divideProbalityOfWin },
                    { minDegree: 61, maxDegree: 120, value: 2, prizeVal: 0, name: 'Better luck next Time', probability: divideProbalityOfloss },
                    { minDegree: 121, maxDegree: 180, value: 3, prizeVal: 0, name: 'Better luck next Time', probability: divideProbalityOfloss },
                    { minDegree: 181, maxDegree: 240, value: 4, prizeVal: 0, name: 'Better luck next Time', probability: divideProbalityOfloss },
                    { minDegree: 241, maxDegree: 300, value: 5, prizeVal: 1, name: 'You won Blaupunkt goodies !', probability: divideProbalityOfWin },
                    { minDegree: 301, maxDegree: 360, value: 6, prizeVal: 0, name: 'Better luck next Time', probability: divideProbalityOfloss },
                ];
            }
            else if (T < 50 && B == 50 && K < 50) {
                
                rotationValues = [
                    { minDegree: 0, maxDegree: 60, value: 1, prizeVal: 1, name: 'You won Thomson goodies !', probability: divideProbalityOfWin },
                    { minDegree: 61, maxDegree: 120, value: 2, prizeVal: 0, name: 'Better luck next Time', probability: divideProbalityOfloss },
                    { minDegree: 121, maxDegree: 180, value: 3, prizeVal: 1, name: 'You won Kodak goodies !', probability: divideProbalityOfWin },
                    { minDegree: 181, maxDegree: 240, value: 4, prizeVal: 0, name: 'Better luck next Time', probability: divideProbalityOfloss },
                    { minDegree: 241, maxDegree: 300, value: 5, prizeVal: 0, name: 'Better luck next Time', probability: divideProbalityOfloss },
                    { minDegree: 301, maxDegree: 360, value: 6, prizeVal: 0, name: 'Better luck next Time', probability: divideProbalityOfloss },
                ];
            }
            else if (T < 50 && B == 50 && K == 50) {
                
                rotationValues = [
                    { minDegree: 0, maxDegree: 60, value: 1, prizeVal: 1, name: 'You won Thomson goodies !', probability: divideProbalityOfWin },
                    { minDegree: 61, maxDegree: 120, value: 2, prizeVal: 0, name: 'Better luck next Time', probability: divideProbalityOfloss },
                    { minDegree: 121, maxDegree: 180, value: 3, prizeVal: 1, name: 'Better luck next Time', probability: divideProbalityOfloss },
                    { minDegree: 181, maxDegree: 240, value: 4, prizeVal: 0, name: 'Better luck next Time', probability: divideProbalityOfloss },
                    { minDegree: 241, maxDegree: 300, value: 5, prizeVal: 0, name: 'Better luck next Time', probability: divideProbalityOfloss },
                    { minDegree: 301, maxDegree: 360, value: 6, prizeVal: 0, name: 'Better luck next Time', probability: divideProbalityOfloss },
                ];
            }
            else if (T == 50 && B < 50 && K < 50) {
                
                rotationValues = [
                    { minDegree: 0, maxDegree: 60, value: 1, prizeVal: 0, name: 'Better luck next Time', probability: divideProbalityOfloss },
                    { minDegree: 61, maxDegree: 120, value: 2, prizeVal: 0, name: 'Better luck next Time', probability: divideProbalityOfloss },
                    { minDegree: 121, maxDegree: 180, value: 3, prizeVal: 1, name: 'You won Kodak goodies !', probability: divideProbalityOfWin },
                    { minDegree: 181, maxDegree: 240, value: 4, prizeVal: 0, name: 'Better luck next Time', probability: divideProbalityOfloss },
                    { minDegree: 241, maxDegree: 300, value: 5, prizeVal: 1, name: 'You won Blaupunkt goodies !', probability: divideProbalityOfWin },
                    { minDegree: 301, maxDegree: 360, value: 6, prizeVal: 0, name: 'Better luck next Time', probability: divideProbalityOfloss },
                ];
            }
            else if (T == 50 && B < 50 && K == 50) {
                
                rotationValues = [
                    { minDegree: 0, maxDegree: 60, value: 1, prizeVal: 0, name: 'Better luck next Time', probability: divideProbalityOfloss },
                    { minDegree: 61, maxDegree: 120, value: 2, prizeVal: 0, name: 'Better luck next Time', probability: divideProbalityOfloss },
                    { minDegree: 121, maxDegree: 180, value: 3, prizeVal: 0, name: 'Better luck next Time', probability: divideProbalityOfloss },
                    { minDegree: 181, maxDegree: 240, value: 4, prizeVal: 0, name: 'Better luck next Time', probability: divideProbalityOfloss },
                    { minDegree: 241, maxDegree: 300, value: 5, prizeVal: 1, name: 'You won Blaupunkt goodies !', probability: divideProbalityOfWin },
                    { minDegree: 301, maxDegree: 360, value: 6, prizeVal: 0, name: 'Better luck next Time', probability: divideProbalityOfloss },
                ];
            }
            else if (T == 50 && B == 50 && K < 50) {
                
                rotationValues = [
                    { minDegree: 0, maxDegree: 60, value: 1, prizeVal: 0, name: 'Better luck next Time', probability: divideProbalityOfloss },
                    { minDegree: 61, maxDegree: 120, value: 2, prizeVal: 0, name: 'Better luck next Time', probability: divideProbalityOfloss },
                    { minDegree: 121, maxDegree: 180, value: 3, prizeVal: 1, name: 'You won Kodak goodies !', probability: divideProbalityOfWin },
                    { minDegree: 181, maxDegree: 240, value: 4, prizeVal: 0, name: 'Better luck next Time', probability: divideProbalityOfloss },
                    { minDegree: 241, maxDegree: 300, value: 5, prizeVal: 0, name: 'Better luck next Time', probability: divideProbalityOfloss },
                    { minDegree: 301, maxDegree: 360, value: 6, prizeVal: 0, name: 'Better luck next Time', probability: divideProbalityOfloss },
                ];
            }
            else if (T == 50 && B == 50 && K == 50) {
                
                rotationValues = [
                    { minDegree: 0, maxDegree: 60, value: 1, prizeVal: 0, name: 'Better luck next Time', probability: divideProbalityOfloss },
                    { minDegree: 61, maxDegree: 120, value: 2, prizeVal: 0, name: 'Better luck next Time', probability: divideProbalityOfloss },
                    { minDegree: 121, maxDegree: 180, value: 3, prizeVal: 0, name: 'Better luck next Time', probability: divideProbalityOfloss },
                    { minDegree: 181, maxDegree: 240, value: 4, prizeVal: 0, name: 'Better luck next Time', probability: divideProbalityOfloss },
                    { minDegree: 241, maxDegree: 300, value: 5, prizeVal: 0, name: 'Better luck next Time', probability: divideProbalityOfloss },
                    { minDegree: 301, maxDegree: 360, value: 6, prizeVal: 0, name: 'Better luck next Time', probability: divideProbalityOfloss },
                ];
            }

            return rotationValues;
            console.log(rotationValues)
        }

        

        console.log(value())

        const rotationValues = value();

        var priceAngle = 360 / rotationValues.length;
        //Size of each piece
        const data = [16, 16, 16, 16, 16, 16];
        //background color for each piece
        var pieColors = [
            "#D0021B",
            "#000000",
            "#f6af17",
            "#000000",
            "#1e73be",
            "#000000",
        ];
        //Create chart
        let myChart = new Chart(wheel, {
            //Plugin for displaying text on pie chart
            plugins: [ChartDataLabels],
            //Chart Type Pie
            type: "pie",
            data: {
                //Labels(values which are to be displayed on chart)
                labels: ['THOMSON', 'TRY AGAIN', 'KODAK', 'TRY AGAIN', 'BLAUPUNKT', 'TRY AGAIN',],
                //Settings for dataset/pie
                datasets: [
                    {
                        backgroundColor: pieColors,
                        data: data,
                    },
                ],
            },
            options: {
                //Responsive chart
                responsive: true,
                animation: { duration: 0 },
                plugins: {
                    //hide tooltip and legend
                    tooltip: false,
                    legend: {
                        display: false,
                    },
                    //display labels inside pie chart
                    datalabels: {
                        color: "#ffffff",
                        formatter: (_, context) => context.chart.data.labels[context.dataIndex],
                        font: { size: 16, weight: 'bold', },

                    },
                },
            },
        });
        // //display value based on the randomAngle
        const valueGenerator = (res) => {
            console.log(res)
            for (let i of rotationValues) {
                //if the res is between min and max then display it
                if (res >= i.minDegree && res <= i.maxDegree) {
                    console.log("res " + res, "i.minDegree " + i.minDegree, "i.maxDegree " + i.maxDegree)
                    finalValue.innerHTML = `<p class="winner-p">${i.name}</p>`;
                    spinBtn.disabled = false;
                    sendData(i);
                    break;
                }
            }
        };

        //Spinner count
        let count = 0;
        //100 rotations for animation and last rotation for result
        let resultValue = 101;


        //Start spinning
        spinBtn.addEventListener("click", () => {
            spinBtn.disabled = true;
            //Empty final value
            finalValue.innerHTML = `<p>Good Luck!</p>`;


            //Generate random degrees to stop at
            var priceAngle = 360 / rotationValues.length;

            var result = rotationValues[0];

            // Generate a list of the indices based on the probabilities
            var weightedList = [];
            for (let i = 0; i < rotationValues.length; i++) {
                for (let j = 0; j < rotationValues[i].probability * 100; j++) {
                    weightedList.push(i);
                }
            }

            // Get a random index from the weightedList and use it to get the price
            var winningPriceIndex = weightedList[Math.floor(Math.random() * weightedList.length)];
            result = rotationValues[winningPriceIndex];

            // Full spins the wheel shoud turn (min. 1, max. 5)
            var fullSpins = Math.floor(Math.random() * 4) + 1;
            // Offset from 0° to the start of the price
            var offsetToPrice = winningPriceIndex * priceAngle;
            // Random offset from the start of the price
            var additionalOffset = Math.floor(Math.random() * priceAngle);

            console.log("The wheel turns " + (fullSpins * 360 + offsetToPrice + additionalOffset)
                + "° (" + fullSpins + " full spin + " + offsetToPrice + "° + " + additionalOffset + "°)");
            console.log('You won: ' + result.value + ' ' + result.name);
            console.log(myChart.options.rotation + additionalOffset)

            let randomDegree = ((result.minDegree + result.maxDegree) / 2);
            console.log(randomDegree)

            // console.log(randomDegree)

            // Interval for rotation animation
            let rotationInterval = window.setInterval(() => {
                //Set rotation for piechart
                /*
                Initially to make the piechart rotate faster we set resultValue to 101 so it rotates 101 degrees at a time and this reduces by 1 with every count. Eventually on last rotation we rotate by 1 degree at a time.
                */
                myChart.options.rotation = myChart.options.rotation + randomDegree;
                // console.log(myChart.options.rotation)

                //Update chart with new value;
                myChart.update();
                //If rotation>360 reset it back to 0
                if (myChart.options.rotation >= 360) {
                    count += 1;
                    result.value -= 5;
                    myChart.options.rotation = 0;
                } else if (count > 15 && myChart.options.rotation == randomDegree) {
                    valueGenerator(randomDegree);
                    clearInterval(rotationInterval);
                    count = 0;
                    resultValue = 101;
                    var element = document.getElementById("spin-container");
                    element.classList.add("display-none");
                    const confe = document.getElementById("confetti");
                    confe.classList.remove("display-none");
                    document.getElementById("wrapper").classList.add("winner-bg");

                }
            }, 50);
        });

        const sendData = async (res) => {

            const localData = JSON.parse(localStorage.getItem('user data'));
            const result = res.name;
            const resultPrizeVal = res.prizeVal;

            const bodyData = {
                "name": localData.name,
                "email": localData.email,
                "mobile": localData.mobile,
                "prize": result,
                "resultPrizeVal": resultPrizeVal
            }

            console.log(localData);

            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(bodyData),
            }

            console.log(requestOptions)

            await fetch(nodeurl + 'users/add', requestOptions).then((res) => res.json())
                .then((res) => {

                    if (res.status === 200) {
                        console.log("success");
                        window.localStorage.clear();
                        // setTimeout(backToHome, 5000);

                        function backToHome() {
                            window.location.href = "/";
                        }
                    }

                    else if (res.status === 400) {
                        alert("somthing went wrong")
                    }
                }
                )
        }

    }

});