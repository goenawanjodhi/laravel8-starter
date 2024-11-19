@extends('app')
{{-- if you want to custom the title using it --}}
@section('title', 'Laravel 8')

@section('content')
    <h1>Welcome to {{ $title }}</h1>
@endsection