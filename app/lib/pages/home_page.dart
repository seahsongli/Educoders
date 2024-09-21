import 'package:flutter/material.dart';

class HomePage extends StatelessWidget {
  const HomePage({super.key});
  @override
  Widget build(BuildContext context) {
    return Center(
      child: Column(
        children: [
          const Row(
            mainAxisSize: MainAxisSize.max,
            children: [
              HomeNounDisplay(),
              Row(mainAxisSize: MainAxisSize.max, children: [
                Text("Streak: 50 days!"),
                // card to display challenge of the day
              ]),
            ],
          ),
          const ProgressBar(),
          Column(
            children: [
              const Text(
                "Currently Active: ",
                style: TextStyle(
                  fontSize: 24,
                  fontWeight: FontWeight.bold,
                ),
              ),
              Card(
                margin: const EdgeInsets.all(10),
                elevation: 2,
                shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(24)),
                clipBehavior: Clip.antiAlias,
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Image.network(
                      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqmVLASn87XI9faqqvtf2LtKMhek1EAmOyyw&s",
                      height: 200,
                      width: double.infinity,
                      fit: BoxFit.cover,
                    ),
                    const Padding(
                      padding: EdgeInsets.all(8.0),
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text(
                            "LookMaxxing",
                            style: TextStyle(
                              fontSize: 16,
                              fontWeight: FontWeight.bold,
                            ),
                          ),
                          SizedBox(height: 4),
                          Text(
                            "Skibidi Toilet",
                            style: TextStyle(
                              fontSize: 12,
                              color: Colors.grey,
                            ),
                          ),
                        ],
                      ),
                    ),
                  ],
                ),
              )
            ],
          ),
        ],
      ),
    );
  }
}

class ProgressBar extends StatelessWidget {
  const ProgressBar({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: const EdgeInsets.all(10),
      child: const Column(
        children: [
          Text(
            "Level 42",
            style: TextStyle(
              fontSize: 24,
              fontWeight: FontWeight.bold,
            ),
          ),
          LinearProgressIndicator(
            minHeight: 10,
            value: 0.5,
          ),
          Padding(
            padding: EdgeInsets.all(8.0),
            child: Text(
              "50% to next level",
              style: TextStyle(
                fontSize: 16,
              ),
            ),
          ),
        ],
      ),
    );
  }
}

class HomeNounDisplay extends StatelessWidget {
  const HomeNounDisplay({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return Align(
      alignment: Alignment.centerLeft,
      child: Container(
        decoration: const BoxDecoration(
          border: BorderDirectional(
            bottom: BorderSide(
              color: Colors.black,
              width: 2,
            ),
            end: BorderSide(
              color: Colors.black,
              width: 2,
            ),
          ),
        ),
        child: Column(
          children: [
            Container(
              decoration: const BoxDecoration(
                border: BorderDirectional(
                  bottom: BorderSide(
                    color: Colors.black,
                    width: 2,
                  ),
                ),
              ),
              child: Image.asset(
                "images/noun.png",
                height: 200,
              ),
            ),
            const Text("Wenjiggler.eth"),
          ],
        ),
      ),
    );
  }
}
