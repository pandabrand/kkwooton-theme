@if ( is_page('about') )
  @php dynamic_sidebar('sidebar-primary') @endphp
@elseif ( is_home() )
  @php dynamic_sidebar('sidebar-events') @endphp
@endif
