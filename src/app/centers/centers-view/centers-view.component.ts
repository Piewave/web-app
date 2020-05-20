/** Angular Imports */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

/**
 * Create Center View
 */
@Component({
  selector: 'mifosx-centers-view',
  templateUrl: './centers-view.component.html',
  styleUrls: ['./centers-view.component.scss']
})
export class CentersViewComponent implements OnInit {

  /** Stores Center View Data */
  centerViewData: any;
  meetingData: boolean;

  /**
   * Retrieves the data for center
   * @param route route Activated Route.
   */
  constructor(private route: ActivatedRoute) {
      this.route.data.subscribe((data: {
        centerViewData: any,
      }) => {
        this.centerViewData = data.centerViewData;
      });
    }

  ngOnInit() {
    if (this.centerViewData.collectionMeetingCalendar) {
      this.meetingData = true;
    } else { this.meetingData = false; }
  }

}
