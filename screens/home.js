

import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import JobCard from '../components/JobCard';

const jobs = [
  { id: 1, title: 'Software Engineer', company: 'Company A' },
  { id: 2, title: 'Data Scientist', company: 'Company B' },
  { id: 3, title: 'Product Manager', company: 'Company C' },
  { id: 4, title: 'Designer', company: 'Company D' },
  { id: 5, title: 'QA Engineer', company: 'Company E' },
  { id: 6, title: 'DevOps Engineer', company: 'Company F' },
  { id: 7, title: 'Support Engineer', company: 'Company G' },
  { id: 8, title: 'Marketing Specialist', company: 'Company H' },
];

export default function HomeScreen({ route }) {
  const { name, email } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Welcome, {name}!</Text>
      <Text style={styles.subHeader}>Email: {email}</Text>

      <Text style={styles.sectionHeader}>Popular Jobs</Text>
      <View style={styles.cardContainer}>
        {jobs.slice(0, 4).map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </View>

      <Text style={styles.sectionHeader}>Featured Jobs</Text>
      <View style={styles.cardContainer}>
        {jobs.slice(4).map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 24,
    marginBottom: 8,
    textAlign: 'center',
  },
  subHeader: {
    fontSize: 18,
    marginBottom: 16,
    textAlign: 'center',
  },
  sectionHeader: {
    fontSize: 20,
    marginVertical: 16,
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
});
