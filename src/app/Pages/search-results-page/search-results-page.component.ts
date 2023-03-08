import { Component } from '@angular/core';
import axios from 'axios';
import { Media } from 'src/app/utils/MediaDetails';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-search-results-page',
  templateUrl: './search-results-page.component.html',
  styleUrls: ['./search-results-page.component.css']
})
export class SearchResultsPageComponent {
  constructor(private route: ActivatedRoute) { };
  pageNo: number = 1;
  query: string = '';
  media: Media[] = [];
  filter: string = 'All';
  loading: boolean = false;
  openMedia(mediaId: number) {
    window.location.href = `/mediaInfo?mediaId=${mediaId}`
  }
  searchData(query: string, filter: string, pageNo: number) {
    try {
      this.loading = true
      axios.get(`https://fletnix.teckturt.co.in/site/apis/media/search?query=${query}&type=${filter}&pageNo=${pageNo}`, { withCredentials: true }).then((response) => {
        if (response.data.success == true && response.data.statusCode == 200) {
          this.loading = false;
          if (response.data.data.data.length == 0) {
            alert(`No data found`)
          }
          for (let i = 0; i < response.data.data.data.length; i++) {
            const element = response.data.data.data[i];
            // Replace the buffer array with base64 data

            this.media.push({
              country: element.country,
              show_id: element.show_id,
              title: element.title,
              type: element.type,
              director: element.director,
              cast: element.cast,
              id: element._id,
              date_added: element.date_added,
              release_year: element.release_year,
              rating: element.rating,
              listed_in: element.listed_i,
              description: element.description
            })
          }
        }
        this.loading = false
      }).catch((error) => {
        this.loading = false
        alert(`Something went wrong while connecting to server`)

        console.log(error.message, 5643, error)
      })
    } catch (e) {
      console.log(e)
      alert(`Something went wrong`)
      this.loading = false
    }

  }
  previousPage() {
    window.location.href = `/searchResults?query=${this.query}&filter=${this.filter}&pageNo=${parseInt(`${this.pageNo}`) - 1}`
  }
  nextPage() {
    window.location.href = `/searchResults?query=${this.query}&filter=${this.filter}&pageNo=${parseInt(`${this.pageNo}`) + 1}`
  }
  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        this.query = params['query']
        this.filter = params['filter']
        this.pageNo = params['pageNo']
        this.searchData(params['query'], params['filter'], params['pageNo'])
      }
      );
  }
}
