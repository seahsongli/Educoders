import 'package:app/pages/courses_page/greeting_widget.dart';
import 'package:flutter/material.dart';

class CoursesPage extends StatelessWidget {
  const CoursesPage({super.key});
  @override
  Widget build(BuildContext context) {
    return const SafeArea(
      child: Center(
        child: Column(
          children: [
            GreetingWidget(),
            Align(
              alignment: Alignment.centerLeft,
              child: Padding(
                padding: EdgeInsets.only(left: 24.0),
                child: Text(
                  "Explore categories",
                  style: TextStyle(
                    fontSize: 28,
                    fontWeight: FontWeight.bold,
                  ),
                ),
              ),
            ),
            Expanded(
              child: CoursesDisplay(),
            ),
          ],
        ),
      ),
    );
  }
}

class CoursesDisplay extends StatelessWidget {
  const CoursesDisplay({super.key});
  @override
  Widget build(BuildContext context) {
    return Container(
      margin: const EdgeInsets.all(16.0),
      child: GridView.builder(
        gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
          crossAxisCount: 2,
          mainAxisSpacing: 10,
          crossAxisSpacing: 10,
        ),
        itemCount: categoryCards.length,
        itemBuilder: (context, index) => categoryCards[index],
      ),
    );
  }
}

class CategoryCard extends StatelessWidget {
  final String title;
  final String subtitle;
  final String imageUrl;

  const CategoryCard({
    super.key,
    required this.title,
    required this.subtitle,
    required this.imageUrl,
  });

  @override
  Widget build(BuildContext context) {
    return Card(
      elevation: 2,
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(24)),
      clipBehavior: Clip.antiAlias,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Image.network(
            imageUrl,
            height: 100,
            width: double.infinity,
            fit: BoxFit.cover,
          ),
          Padding(
            padding: const EdgeInsets.all(8.0),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  title,
                  style: const TextStyle(
                    fontSize: 16,
                    fontWeight: FontWeight.bold,
                  ),
                ),
                const SizedBox(height: 4),
                Text(
                  subtitle,
                  style: const TextStyle(
                    fontSize: 12,
                    color: Colors.grey,
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}

List<CategoryCard> categoryCards = [
  CategoryCard(
    title: 'Accounting',
    subtitle: '20 Courses',
    imageUrl: url, // Replace with your image URL
  ),
  CategoryCard(
    title: 'Biology',
    subtitle: '15 Courses',
    imageUrl: url, // Replace with your image URL
  ),
  CategoryCard(
    title: 'Photography',
    subtitle: '25 Courses',
    imageUrl: url, // Replace with your image URL
  ),
  CategoryCard(
    title: 'Marketing',
    subtitle: '18 Courses',
    imageUrl: url, // Replace with your image URL
  ),
  CategoryCard(
    title: 'Mewing',
    subtitle: '18 Courses',
    imageUrl: url, // Replace with your image URL
  ),
  CategoryCard(
    title: 'LooksMaxxing',
    subtitle: '18 Courses',
    imageUrl: url, // Replace with your image URL
  ),
];

String url =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9lcsxrF8y6syCvTXgZXwX6M1Bkdm0Q189rQ&s";
