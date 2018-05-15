<header class="banner">
  <div class="container">
    <nav class="navbar navbar-expand-lg">
      <a class="navbar-brand" href="{{ home_url('/') }}">{{ get_bloginfo('name', 'display') }}</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
        <span class="far fa-bars"></span>
      </button>
      <div class="nav-primary collapse navbar-collapse" id="navbarToggler">
        @if (has_nav_menu('primary_navigation'))
          {!! wp_nav_menu(['theme_location' => 'primary_navigation', 'menu_class' => 'navbar-nav', 'container_class' => 'menu-top-menu-container ml-auto']) !!}
        @endif
      </div>
    </nav>
  </div>
</header>
