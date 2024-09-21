import 'package:flutter/material.dart';

class GreetingWidget extends StatelessWidget {
  const GreetingWidget({super.key});

  @override
  Widget build(BuildContext context) {
    return Card(
      shape: const RoundedRectangleBorder(
        borderRadius: BorderRadius.all(
          Radius.circular(32.0),
        ),
      ),
      margin: const EdgeInsets.all(24.0),
      child: Padding(
        padding: const EdgeInsets.all(24.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                const Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      "Hello!",
                      style: TextStyle(
                        fontSize: 24,
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                    Text(
                      "Good morning!",
                    ),
                  ],
                ),
                IconButton(
                  color: Colors.black,
                  style: IconButton.styleFrom(
                    shape: const CircleBorder(),
                    backgroundColor: const Color.fromARGB(92, 210, 210, 210),
                  ),
                  icon: const Badge(child: Icon(Icons.notifications)),
                  onPressed: () {},
                ),
              ],
            ),
            const Padding(
              padding: EdgeInsets.only(top: 48.0),
              child: SearchBar(
                hintText: "Search for courses",
                leading: Icon(Icons.search),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
