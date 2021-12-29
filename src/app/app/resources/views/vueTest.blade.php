<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    {{-- <script src="{{ asset('js/app.js') }}" defer></script> --}}
    <script src="{{ asset('js/vueTest.js') }}" defer></script>
    <title>practice-laravel-vue-app</title>
</head>
<body>
    <div>
        <h1>Laravelで遷移 1</h1>
        <div id="sum">
            <p>@{{ sum(1, 4) }}</p>
        </div>
    </div>
</body>
</html>