<article @php post_class() @endphp>
  <header>
    <div class="header-detail">@php the_field('date') @endphp</div>
    <div class="header-detail">@php the_field('time') @endphp</div>
    <div class="header-detail">{{ get_the_title() }}</div>
  </header>
  <div class="entry-summary">
    <div class="event-detail">@php the_field('event_detail') @endphp</div>
    <div class="event-url"><a href="{{the_field('url')}}" target="_blank">@php the_field('url') @endphp</a></div>
    <div class="entry-content">@php the_content() @endphp</div>
    @if ( has_post_thumbnail() )
      <figure>
              @php the_post_thumbnail('medium', ['class' => 'img-fluid']) @endphp
              <figcaption>
                @php
                  $thumb_img = get_post( get_post_thumbnail_id() );
                  echo $thumb_img->post_excerpt;
                @endphp
              </figcaption>
      </figure>
    @endif
  </div>
</article>
