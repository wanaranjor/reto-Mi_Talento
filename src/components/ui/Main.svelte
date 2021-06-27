<script>
  import Circle from "./Circle.svelte";
  import FormSensor from "./FormSensor.svelte";
  import SensorChart from "./SensorChart.svelte";

  let sensorId;
  let sensorInfo;
  let view = false;

  const handleInfoSensor = (event) => {
    sensorId = event.detail.sensorId;
    sensorInfo = event.detail.sensorInfo;
    view = true;
  };

  const handleNoViewChart = () => {
    view = false;
  };
</script>

<div class="flex flex-col w-full">
  <FormSensor on:sensor={handleInfoSensor} on:noViewChart={handleNoViewChart} />
  <div class="grid grid-cols-2 p-10 ">
    <Circle />
    {#if view && sensorId != null && sensorInfo != null}
      <SensorChart {sensorId} {sensorInfo} />
    {/if}
  </div>
</div>
