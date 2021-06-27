<script>
  import { NotificationDisplay, notifier } from "@beyonk/svelte-notifications";
  import Search24 from "carbon-icons-svelte/lib/Search24";
  import { createEventDispatcher } from "svelte";
  import { getSensorById } from "../services/services.js";
  import { isNumber, isRange } from "./../../helpers/validators.js";
  import { STATUS_ERROR } from "./../../keys/keys.js";

  const dispatch = createEventDispatcher();

  let sensorId = null;
  let sensorInfo = null;

  $: if (sensorId === "") {
    sensorId = null;
    sensorInfo = null;
    dispatch("sensor", { sensorId, sensorInfo });
  }

  $: formIsValid = isNumber(sensorId) && isRange(sensorId);

  const handleSubmit = async () => {
    dispatch("noViewChart");
    sensorInfo = await getSensorById(sensorId);
    if (sensorInfo.length > 0) {
      dispatch("sensor", { sensorId, sensorInfo });
      sensorId = null;
      sensorInfo = null;
    } else {
      notifier.danger(
        `Error ${sensorInfo}: ${STATUS_ERROR[sensorInfo]} `,
        3000
      );
    }
  };
</script>

<NotificationDisplay />

<div class="container max-w-sm p-5 mx-auto sm:max-w-md sm:p-0">
  <div
    class="flex flex-col items-center justify-center bg-white rounded-lg p-7"
  >
    <form class="w-full" on:submit|preventDefault={handleSubmit}>
      <div class="flex flex-row items-center">
        <div class="flex flex-col mt-4">
          <label class="label-form" for="sensorId">Busqueda Sensor</label>
          <div class="flex flex-row">
            <input
              id="sensorId"
              type="text"
              name="sensorId"
              bind:value={sensorId}
              class="input-form"
              placeholder="1 - 180.000"
            />
            <button
              class={formIsValid ? "btn" : "btn opacity-50 cursor-not-allowed"}
              disabled={!formIsValid}
              type="submit"
              ><Search24 />
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
</div>
