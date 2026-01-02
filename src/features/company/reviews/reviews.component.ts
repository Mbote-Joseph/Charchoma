import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent {
  reviews = [
    { name: 'Mike Musoki', rating: 5, comment: 'Probably my favorite spot in Mombasa', time: '1 day ago' },
    { name: 'Regina Kariuki', rating: 5, comment: 'Excellent service and food!', time: '3 days ago' },
    { name: 'Pea Tah', rating: 5, comment: 'Grill masters for real!', time: '3 days ago' },
    { name: 'Lydiah Juma', rating: 4, comment: 'Cozy place for relaxing and eating', time: '3 days ago' },
    { name: 'Tony Gati', rating: 5, comment: 'Fantastic smoky aromas and local vibe', time: '4 days ago' },
    { name: 'Mathew Rock', rating: 4, comment: 'One of the best I’ve been to.', time: '5 days ago' },
    { name: 'Ahmed M.S', rating: 5, comment: 'Exclusive crowd, great meat variety', time: '10 days ago' },
    { name: 'Angela Lebu', rating: 5, comment: 'Highly recommend it!', time: '10 days ago' },
    { name: 'Jacinta Kithinzi', rating: 5, comment: 'Fresh, fast, and friendly.', time: '10 days ago' },
    { name: 'Nicole Nasengo', rating: 5, comment: 'Amazing 10/10 experience', time: '16 days ago' }
  ];
}
