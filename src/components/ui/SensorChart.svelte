<script>
  import { afterUpdate } from "svelte";
  import { chartSensor } from "./../services/services.js";

  export let sensorId;
  export let sensorInfo;

  afterUpdate(() => {
    chartSensor(sensorId, sensorInfo);
  });
</script>

<div class="w-11/12 sm:w-full">
  <canvas id="SensorChart" />
</div>
