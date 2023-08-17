<!DOCTYPE html>
<html lang="en">

<head>
  {{-- ziggy routing directive --}}
  @routes

  {{-- vite directive --}}
  @vite('resources/js/app.js')

  {{-- inertia directive --}}
  @inertiaHead

  <title>Laravel 10 - Inertia Vue - Vuetify</title>
</head>

<body class="font-sans antialiased">
  @inertia
</body>

</html>
