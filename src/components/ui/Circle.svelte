<script>
  let type = "Correcto";
  let color = "blue";

  // let type = 'Anomalia';
  // let color = 'red';
</script>

<div
  class={color === "blue"
    ? " flex items-center justify-center w-40 h-40 font-bold text-white bg-blue-700 rounded-full"
    : " flex items-center justify-center w-40 h-40 font-bold text-white bg-red-700 rounded-full"}
>
  {type}
</div>
