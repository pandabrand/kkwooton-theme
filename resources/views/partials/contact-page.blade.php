<div class="container">
  <div class="row">
      <div class="col-12 col-md-6">
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
      <div class="col-12 col-md-6 mt-4">
        <h5>Literary, Film, or Television Inquiries</h5>
        <div>
          <b>Barry Hirsch</b><br/>
          HWHM+F<br/>
          10100 Santa Monica Boulevard, LA, CA 90067<br/>
          <a href="tel:+1-310-703-1700">310-703-1700</a>
        </div>
      </div>
  </div>
</div>
{!! wp_link_pages(['echo' => 0, 'before' => '<nav class="page-nav"><p>' . __('Pages:', 'sage'), 'after' => '</p></nav>']) !!}
