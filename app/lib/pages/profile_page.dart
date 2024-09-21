import 'package:flutter/material.dart';

class ProfilePage extends StatelessWidget {
  const ProfilePage({super.key});
  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Center(
        child: Column(
          children: [
            Container(
              margin: const EdgeInsets.all(12),
              decoration: BoxDecoration(
                shape: BoxShape.circle,
                boxShadow: [
                  BoxShadow(
                    color: Colors.grey.withOpacity(0.5),
                    spreadRadius: 5,
                    blurRadius: 7,
                    offset: const Offset(0, 3),
                  ),
                ],
              ),
              child: ClipRRect(
                borderRadius: BorderRadius.circular(100),
                child: Image.asset(
                  "images/noun.png",
                  height: 200,
                ),
              ),
            ),
            const Align(
              alignment: Alignment.centerLeft,
              child: Padding(
                padding: EdgeInsets.only(left: 12.0),
                child: Text(
                  'My Account',
                  style: TextStyle(
                    fontSize: 32,
                    fontWeight: FontWeight.bold,
                  ),
                ),
              ),
            ),
            const Expanded(child: MyDrawer())
          ],
        ),
      ),
    );
  }
}

class DrawerItem extends StatelessWidget {
  final IconData icon;
  final String title;

  const DrawerItem({
    super.key,
    required this.icon,
    required this.title,
  });

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(2.0),
      child: Material(
        child: ListTile(
          shape: ShapeBorder.lerp(
            RoundedRectangleBorder(
              borderRadius: BorderRadius.circular(8),
            ),
            RoundedRectangleBorder(
              borderRadius: BorderRadius.circular(8),
            ),
            0.5,
          ),
          hoverColor: Colors.grey.withOpacity(0.5),
          style: ListTileStyle.list,
          leading: Icon(icon),
          title: Text(title),
          onTap: () {
            // Handle item tap here (e.g., navigate to a different screen)
          },
        ),
      ),
    );
  }
}

List<Widget> drawerItems = [
  const DrawerItem(icon: Icons.edit, title: 'Edit Profile'),
  const DrawerItem(icon: Icons.lock, title: 'Purchased Courses'),
  const DrawerItem(icon: Icons.history, title: 'Payment history'),
  const DrawerItem(icon: Icons.chat, title: 'Chat / Support'),
  const DrawerItem(icon: Icons.star, title: 'Rate App'),
  const DrawerItem(icon: Icons.share, title: 'Share App'),
  const DrawerItem(icon: Icons.info, title: 'About Us'),
];

class MyDrawer extends StatelessWidget {
  const MyDrawer({super.key});

  @override
  Widget build(BuildContext context) {
    return ListView(
      padding: const EdgeInsets.all(8),
      children: [
        ...drawerItems,
      ],
    );
  }
}
