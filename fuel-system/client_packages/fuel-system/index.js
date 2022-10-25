let player = mp.players.local;

mp.events.add("render", () => {
  if (player.vehicle && player.seat === 0) {
    // Speedometer code

    let fuel = player.vehicle.getVariable('Tank');
    let kilometers = kmS = player.vehicle.getVariable('Kilometer');
  }
});

setInterval(function () {
  _intervalFunction();
}, 1000);

function _intervalFunction() {
  let player = mp.players.local;

  if (player.vehicle && player.vehicle.getPedInSeat(-1) === player.handle) {
    let veh_speed = mp.players.local.vehicle.getSpeed();
    let veh_class = mp.players.local.vehicle.getClass();
    let veh_data = JSON.stringify({ speed: veh_speed, class: veh_class});
    mp.events.callRemote("calc_km", (player, veh_data));
  }
}
