<div class="container">
  <div class="row">
      <div class="col-12">
        <div class="page__image">
          <figure>
            @php the_post_thumbnail('medium_large', ['class' => 'img-fluid float-right']) @endphp
            <figcaption>
              @php
                $thumb_img = get_post( get_post_thumbnail_id() );
                echo $thumb_img->post_excerpt;
              @endphp
            </figcaption>
          </figure>
        </div>
        @php the_content() @endphp
      </div>
  </div>
</div>
{!! wp_link_pages(['echo' => 0, 'before' => '<nav class="page-nav"><p>' . __('Pages:', 'sage'), 'after' => '</p></nav>']) !!}
