import { Component } from '@angular/core';
import { Media } from 'src/app/utils/MediaDetails';
import axios from 'axios';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  media: Media[] = [];
  loading: boolean = false;
  search() {
    const query = (<HTMLInputElement>document.getElementById("searchedText")).value
    const filter = (<HTMLInputElement>document.getElementById("filter")).value
    if (query.length == 0) {
      alert(`Please enter some text`)
    } else {
      window.location.href = `/searchResults?query=${query}&filter=${filter}&pageNo=1`
      // this.searchData(query, filter)
    }
  }
  openMedia(mediaId: number) {
    window.location.href = `/mediaInfo?mediaId=${mediaId}`
  }
  searchData(query: string, filter: string) {
    try {
      this.loading = true
      axios.get(`http://localhost:4002/apis/media/search?query=${query}&type=${filter}`, { withCredentials: true }).then((response) => {
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
              listed_in: element.listed_in,
              description: element.description
            })
          }
        } else {
          alert(response.data.message)
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
  ngOnInit() {
    this.searchData(`safe house`, 'All')
  }
}
