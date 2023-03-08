import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import axios from 'axios';
import { Media } from 'src/app/utils/MediaDetails';
@Component({
  selector: 'app-media-info',
  templateUrl: './media-info.component.html',
  styleUrls: ['./media-info.component.css']
})
export class MediaInfoComponent {
  constructor(private route: ActivatedRoute) { };
  media: Media = {
    country: '',
    show_id: 0,
    title: '',
    type: '',
    director: '',
    cast: '',
    date_added: '',
    release_year: '',
    rating: '',
    listed_in: '',
    description: '',
    id: 0
  };
  mediaId: number = -1;
  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {

        this.mediaId = params['mediaId']
        axios.get(`https://fletnix.teckturt.co.in/site/apis/media/getMediaData?mediaId=${params['mediaId']}`, { withCredentials: true }).then((response) => {
          if (response.data.success == true && response.data.statusCode == 200) {
            if (response.data.data.data.length == 0) {
              alert(`No data found`)
            }
            const element = response.data.data.data[0];
            // Replace the buffer array with base64 data

            this.media = {
              country: element.country,
              show_id: element.show_id,
              title: element.title,
              type: element.type,
              director: element.director,
              cast: element.cast,
              date_added: element.date_added,
              release_year: element.release_year,
              rating: element.rating,
              listed_in: element.listed_in,
              description: element.description,
              id: element._id
            };

          }
        }).catch((error) => {
          alert(`Something went wrong while connecting to server`)

          console.log(error.message, 5643, error)
        })
      }
      );
  }
}
